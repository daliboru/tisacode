import { CollectionConfig } from 'payload'

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
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
      required: true,
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
  timestamps: true,
}

export default Subscribers
