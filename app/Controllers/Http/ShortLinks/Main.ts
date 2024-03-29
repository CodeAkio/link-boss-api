import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ShortLink from 'App/Models/ShortLink'
import { StoreValidator } from 'App/Validators/ShortLink'

import urlMetadata from 'url-metadata'
import { generate as generateShortId } from 'shortid'

export default class ShortLinksController {
  public async index({ request, response }: HttpContextContract): Promise<void> {
    const page = request.input('page', 1)
    const limit = 10

    const shortLinks = await ShortLink.query().paginate(page, limit)

    return response.ok(shortLinks)
  }

  public async store({ request, response, auth }: HttpContextContract): Promise<void> {
    const { url: originalUrl } = await request.validate(StoreValidator)
    const userId = auth.user?.id
    let title: string

    try {
      const metadata = await urlMetadata(originalUrl)
      title = metadata.title
    } catch (error) {
      return response.badRequest({ error: { message: 'Error getting title from URL' } })
    }

    const shortLink = await ShortLink.create({
      originalUrl,
      shortCode: generateShortId(),
      title,
      userId,
    })

    return response.ok(shortLink)
  }

  public async show({ response, params }: HttpContextContract): Promise<void> {
    try {
      const shortLink = await ShortLink.findByIdShortCodeOrFail(params.search)

      shortLink.views++
      await shortLink.save()

      return response.ok(shortLink)
    } catch (error) {
      return response.badRequest(error.message)
    }
  }

  public async destroy({ response, params, bouncer }: HttpContextContract): Promise<void> {
    try {
      const shortLink = await ShortLink.findByIdShortCodeOrFail(params.search)

      if (await bouncer.with('ShortLinkPolicy').denies('delete', shortLink)) {
        return response.forbidden({
          error: "You don't have permission to delete the current short link",
        })
      }

      await shortLink.delete()

      return response.noContent()
    } catch (error) {
      return response.badRequest(error.message)
    }
  }
}
