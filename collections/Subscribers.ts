import { CollectionConfig } from 'payload'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'source', 'createdAt', 'status'],
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'background',
      type: 'text',
    },
    {
      name: 'source',
      type: 'select',
      options: [
        { label: 'Newsletter', value: 'newsletter' },
        { label: 'Workshop Application', value: 'workshop' },
        { label: 'Contact Form', value: 'contact' },
        { label: 'Other', value: 'other' },
      ],
      required: true,
    },
    {
      name: 'workshopId',
      type: 'text',
      admin: {
        description: 'Identifier for the specific workshop the subscriber signed up for',
        condition: data => data.source === 'workshop',
      },
    },
    {
      name: 'preferredTime',
      type: 'text',
      admin: {
        description: 'Preferred time for the workshop',
        condition: data => data.source === 'workshop',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'active',
      options: [
        { label: 'Active', value: 'active' },
        { label: 'Unsubscribed', value: 'unsubscribed' },
        { label: 'Bounced', value: 'bounced' },
      ],
    },
  ],
  indexes: [
    {
      fields: ['email', 'workshopId'],
      unique: true,
    },
  ],
  timestamps: true,
  hooks: {
    afterOperation: [
      async ({ operation, result }) => {
        if (operation === 'create') {
          if (process.env.NODE_ENV === 'production') {
            try {
              await resend.contacts.create({
                audienceId: process.env.NEXT_PUBLIC_AUDIENCE_ID!,
                email: result.email,
                firstName: result.name.split(' ')[0],
                unsubscribed: false,
              })
            } catch (error) {
              console.log(error)
            }
          }
        }
      },
    ],
  },
}

export default Subscribers
