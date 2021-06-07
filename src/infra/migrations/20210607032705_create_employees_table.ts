import { Knex } from 'knex'
import dbActions from '../connect'

export async function up (knex: Knex): Promise<void> {
  return await dbActions.schema.createTableIfNotExists('employees', table => {
    table.string('id_employees')
      .primary()
      .notNullable()

    table.string('id_company')
      .references('id_company')
      .inTable('data_company')
      .notNullable()

    table.string('id_user')
      .references('id_user')
      .inTable('accounting_office_users')
      .notNullable()

    table.timestamp('created_at')
      .defaultTo(dbActions.fn.now())
      .notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return await dbActions.schema.dropTableIfExists('employees')
}
