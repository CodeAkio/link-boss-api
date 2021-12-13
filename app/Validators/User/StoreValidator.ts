import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    username: schema.string(
      {
        trim: true,
      },
      [rules.minLength(2), rules.maxLength(255)]
    ),

    email: schema.string({}, [
      rules.email({
        sanitize: true,
      }),
      rules.unique({ table: 'users', column: 'email' }),
      rules.maxLength(255),
    ]),

    password: schema.string({}, [rules.confirmed(), rules.minLength(6), rules.maxLength(180)]),
  })

  public messages = {}
}
