import { Knex } from 'knex'
import dbActions from '../connect'

export async function up (knex: Knex): Promise<void> {
  return await dbActions.schema.createTableIfNotExists('data_owner', table => {
    table.string('id_owner')
      .primary()
      .references('id_user')
      .inTable('accounting_office_users')
      .notNullable()

    table.string('id_email')
      .references('email')
      .inTable('accounting_office_users')
      .notNullable()
      .onDelete('CASCADE')

    table.bigInteger('cpf')
      .unique()
      .notNullable()

    table.string('id_address')
      .references('id_address')
      .inTable('address')
      .notNullable()
      .onDelete('CASCADE')

    table.string('plane', 15)
      .notNullable()

    table.timestamp('created_at')
      .defaultTo(dbActions.fn.now())
      .notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return await dbActions.schema.dropTableIfExists('data_onwer')
}
