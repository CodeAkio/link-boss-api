import { DateTime } from 'luxon'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  beforeCreate,
  BaseModel,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm'

import { v4 as uuid } from 'uuid'

import UserToken from './UserToken'
import ShortLink from './ShortLink'

export default class User extends compose(BaseModel, SoftDeletes) {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public username: string

  @column()
  public avatar: string | null

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column()
  public role: 'normal' | 'admin'

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ serializeAs: null })
  public deletedAt: DateTime

  @hasMany(() => UserToken)
  public tokens: HasMany<typeof UserToken>

  @hasMany(() => ShortLink)
  public shortLinks: HasMany<typeof ShortLink>

  public isAdmin(): boolean {
    return this.role === 'admin'
  }

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @beforeCreate()
  public static assignUuid(user: User) {
    user.id = uuid()
  }
}
