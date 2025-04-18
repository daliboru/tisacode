'use server'

import { getServerValues } from '../utils'
import { WorkshopFormInputs, workshopFormSchema } from '../validations/workshop'

export async function createSubscriberFromWorkshop(data: WorkshopFormInputs) {
  try {
    const { payload } = await getServerValues()

    const { name, email } = data

    const parsedData = workshopFormSchema.safeParse({
      name: name,
      email: email,
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
      },
    })

    if (existingSub.totalDocs > 0) {
      return {
        success: true,
        message: 'You are already on on the list!',
      }
    }

    await payload.create({
      collection: 'subscribers',
      data: {
        email: parsedData.data.email,
        name: parsedData.data.name,
        source: 'workshop',
      },
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
