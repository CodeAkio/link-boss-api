import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { isBefore, parseISO, subHours } from 'date-fns'

import User from 'App/Models/User'
import UserToken from 'App/Models/UserToken'
import { StoreValidator } from 'App/Validators/ResetPassword'

export default class ResetPasswordController {
  public async store({ request, response, params }: HttpContextContract): Promise<void> {
    const { password } = await request.validate(StoreValidator)

    const userToken = await UserToken.findByOrFail('token', params.token)

    if (isBefore(parseISO(userToken.createdAt.toString()), subHours(new Date(), 2))) {
      return response.badRequest({ error: { message: 'Expired token' } })
    }

    if (userToken.is_revoked) {
      return response.badRequest({ error: { message: 'Token revogado' } })
    }

    await userToken.load('user')
    const user: User = userToken.user
    user.password = password
    await user.save()

    userToken.is_revoked = true
    await userToken.save()

    return response.noContent()
  }
}
