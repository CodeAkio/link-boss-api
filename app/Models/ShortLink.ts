import { DateTime } from 'luxon'
import { compose } from '@ioc:Adonis/Core/Helpers'
import { SoftDeletes } from '@ioc:Adonis/Addons/LucidSoftDeletes'
import { BaseModel, column, beforeCreate, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

import { v4 as uuid, validate as uuidValidate } from 'uuid'
import shortid from 'shortid'

import User from './User'

export default class ShortLink extends compose(BaseModel, SoftDeletes) {
  public static selfAssignPrimaryKey = true

  @column({ isPrimary: true })
  public id: string

  @column()
  public originalUrl: string

  @column()
  public shortCode: string

  @column()
  public title: string

  @column()
  public views: number

  @column()
  public userId: string | null

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column.dateTime({ serializeAs: null })
  public deletedAt: DateTime

  @beforeCreate()
  public static assignUuid(shortLink: ShortLink) {
    shortLink.id = uuid()
  }

  public static async findByIdShortCodeOrFail(idOrShortCode: string): Promise<ShortLink> {
    if (uuidValidate(idOrShortCode)) {
      return await ShortLink.findOrFail(idOrShortCode)
    } else if (shortid.isValid(idOrShortCode)) {
      return await ShortLink.findByOrFail('short_code', idOrShortCode)
    } else {
      throw new Error('Invalid search term')
    }
  }
}
