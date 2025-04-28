'use server'

import { workshopMay2025EmailHTML, workshopMay2025PlainText } from '../emails/workshop-may-2025'
import { getServerValues } from '../utils'
import { WorkshopFormInputs, workshopFormSchema } from '../validations/workshop'

export async function createSubscriberFromWorkshop(data: WorkshopFormInputs) {
  try {
    const { payload } = await getServerValues()

    const { name, email, background, workshopId } = data

    const parsedData = workshopFormSchema.safeParse({
      name,
      email,
      background,
      workshopId,
    })

    if (!parsedData.success) {
      return {
        success: false,
        message: 'Invalid form data',
      }
    }

    const existingSub = await payload.find({
      collection: 'subscribers',
      where: {
        email: {
          equals: parsedData.data.email,
        },
        source: {
          equals: 'workshop',
        },
        workshopId: {
          equals: parsedData.data.workshopId,
        },
      },
    })

    if (existingSub.totalDocs > 0) {
      return {
        success: false,
        message: 'You are already on on the list!',
      }
    }

    await payload.create({
      collection: 'subscribers',
      data: {
        email: parsedData.data.email,
        name: parsedData.data.name,
        background: parsedData.data.background,
        source: 'workshop',
        workshopId: parsedData.data.workshopId,
      },
    })

    await payload.sendEmail({
      to: parsedData.data.email,
      subject: 'Thank you for applying!',
      html: workshopMay2025EmailHTML(parsedData.data.name),
      text: workshopMay2025PlainText(parsedData.data.name),
    })

    return {
      success: true,
      message: 'You have successfully applied!',
    }
  } catch (error) {
    console.error('Error on createSubscriberFromWorkshop:', error)
    return {
      success: false,
      message: 'Something went wrong!',
    }
  }
}
