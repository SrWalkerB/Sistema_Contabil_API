import { Knex } from 'knex'
import dbActions from '../connect'

export async function up (knex: Knex): Promise<void> {
  return await dbActions.schema.createTableIfNotExists('accounting_office_users', table => {
    table.string('id_user')
      .primary()
      .notNullable()

    table.string('name', 60)
      .notNullable()

    table.string('username', 30)
      .unique()
      .notNullable()

    table.string('email', 60)
      .unique()
      .notNullable()

    table.string('password')
      .notNullable()

    table.string('type', 15)
      .notNullable()

    table.timestamp('created_at')
      .defaultTo(dbActions.fn.now())
      .notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return await dbActions.schema.dropTableIfExists('accounting_office_users')
}
