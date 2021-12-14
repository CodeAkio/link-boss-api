import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    url: schema.string({ trim: true }, [
      rules.url(),
      rules.maxLength(2000),
      rules.unique({ table: 'short_links', column: 'original_url' }),
    ]),
  })

  public messages = {}
}
