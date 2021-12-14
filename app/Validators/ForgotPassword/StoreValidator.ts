import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    email: schema.string(
      {
        trim: true,
      },
      [
        rules.email({
          sanitize: true,
        }),
        rules.exists({ table: 'users', column: 'email' }),
        rules.maxLength(255),
      ]
    ),
  })

  public messages = {}
}
