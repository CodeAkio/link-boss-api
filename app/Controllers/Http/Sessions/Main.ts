import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { StoreValidator } from 'App/Validators/Session'

export default class MainsController {
  public async store({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(StoreValidator)
    const token = await auth.use('api').attempt(email, password)

    return response.created(token)
  }

  public async destroy({ response, auth }: HttpContextContract) {
    await auth.use('api').logout()

    return response.noContent()
  }
}
