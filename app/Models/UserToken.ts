import { DateTime } from 'luxon'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { BaseModel, column, belongsTo, beforeCreate, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'

import { v4 as uuid } from 'uuid'

import User from './User'

export default class UserToken extends compose(BaseModel, SoftDeletes) {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public token: string

  @column()
  public type: 'forgot_password'

  @column()
  public is_revoked: boolean

  @column()
  public userId: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ serializeAs: null })
  public deletedAt: DateTime

  @beforeCreate()
  public static assignUuid(userToken: UserToken): void {
    userToken.id = uuid()
  }

  @beforeCreate()
  public static assignToken(userToken: UserToken): void {
    userToken.token = uuid()
  }
}
