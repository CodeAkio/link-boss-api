import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    password: schema.string({ trim: true }, [
      rules.confirmed(),
      rules.minLength(6),
      rules.maxLength(180),
    ]),
  })

  public messages = {}
}
