import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ShortLinks extends BaseSchema {
  protected tableName = 'short_links'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()
      table
        .uuid('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .nullable()
      table.text('original_url').notNullable().unique()
      table.string('short_code', 20).notNullable().unique().index()
      table.string('title').notNullable()
      table.integer('views').unsigned().notNullable().defaultTo(0)

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
      table.dateTime('deleted_at')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
