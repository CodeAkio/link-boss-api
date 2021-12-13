import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import { StoreValidator } from 'App/Validators/User'

export default class UsersController {
  public async store({ request, response }: HttpContextContract): Promise<void> {
    const validatedData = await request.validate(StoreValidator)

    const user = await User.create(validatedData)

    return response.created(user)
  }
}
