import { BaseMailer, MessageContract } from '@ioc:Adonis/Addons/Mail'
import View from '@ioc:Adonis/Core/View'

import mjml from 'mjml'

import User from 'App/Models/User'

type ForgotPasswordEmailData = {
  user: User
  url: string
}

export default class ForgotPasswordEmail extends BaseMailer {
  constructor(private forgotPasswordEmailData: ForgotPasswordEmailData) {
    super()
  }

  public async prepare(message: MessageContract) {
    const { user, url } = this.forgotPasswordEmailData

    const html = mjml(
      await View.render('emails/forgot_password', {
        username: user.username,
        url,
      })
    ).html

    message
      .subject('Link Boss - Recuperação de senha')
      .from('suporte@linkboss.com.br')
      .to(user.email)
      .html(html)
  }
}
