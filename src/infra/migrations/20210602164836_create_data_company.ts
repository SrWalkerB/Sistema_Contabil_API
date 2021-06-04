import { Knex } from 'knex'
import dbActions from '../connect'

export async function up (knex: Knex): Promise<void> {
  return await dbActions.schema.createTableIfNotExists('data_company', table => {
    table.string('id_company')
      .primary()
      .notNullable()

    table.string('name', 60)
      .notNullable()

    table.bigInteger('cnpj')
      .unique()
      .notNullable()

    table.string('id_responsible')
      .references('id_owner')
      .inTable('data_owner')
      .notNullable()
      .onDelete('CASCADE')

    table.string('id_address')
      .references('id_address')
      .inTable('address')
      .notNullable()
      .onDelete('CASCADE')

    table.timestamp('created_at')
      .defaultTo(dbActions.fn.now())
      .notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return await dbActions.schema.dropTableIfExists('data_company')
}
