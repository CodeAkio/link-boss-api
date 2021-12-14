import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserTokens extends BaseSchema {
  protected tableName = 'user_tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('token', 255).notNullable().unique().index()
      table.string('type', 80).notNullable()
      table.boolean('is_revoked').defaultTo(false)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.dateTime('deleted_at')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
