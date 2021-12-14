import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

import User from 'App/Models/User'
import UserToken from 'App/Models/UserToken'
import { StoreValidator } from 'App/Validators/ForgotPassword'
import ForgotPasswordEmail from 'App/Mailers/ForgotPasswordEmail'

export default class ForgotPasswordController {
  public async store({ request, response }: HttpContextContract): Promise<void> {
    const { email } = await request.validate(StoreValidator)

    const user = await User.findByOrFail('email', email)

    const userToken = await UserToken.create({
      userId: user.id,
      type: 'forgot_password',
    })

    const resetPasswordUrl = `${Env.get('FRONT_URL')}/passwords/reset/${userToken.token}`

    await new ForgotPasswordEmail({ user, url: resetPasswordUrl }).sendLater()

    return response.noContent()
  }
}
