import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ShortLink from 'App/Models/ShortLink'

export default class ShortLinksTopController {
  public async index({ response }: HttpContextContract): Promise<void> {
    const limit = 100

    const shortLinks = await ShortLink.query().orderBy('views', 'desc').limit(limit)

    return response.ok(shortLinks)
  }
}
