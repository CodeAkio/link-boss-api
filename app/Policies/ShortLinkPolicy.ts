import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Models/User'
import ShortLink from 'App/Models/ShortLink'

export default class ShortLinkPolicy extends BasePolicy {
  public async delete(user: User, shortLink: ShortLink) {
    return user.isAdmin() || shortLink.isOwner(user.id)
  }
}
