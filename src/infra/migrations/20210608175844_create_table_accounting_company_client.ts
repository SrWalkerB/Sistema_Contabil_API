import { Knex } from 'knex'
import dbActions from '../connect'

export async function up (knex: Knex): Promise<void> {
  return await dbActions.schema.createTableIfNotExists('accounting_company_client', table => {
    table.string('id_company')
      .primary()
      .notNullable()

    table.string('name', 60)
      .notNullable()

    table.string('corporate_name', 120)
      .notNullable()

    table.string('cnpj', 11)
      .unique()
      .notNullable()

    table.string('phone', 11)

    table.string('email')
      .unique()

    table.string('state_registry', 15)
      .unique()

    table.string('municipal_registry', 15)
      .unique()

    table.string('legal_natural', 4)
      .notNullable()

    table.date('begin_date')

    table.string('cnae_primary', 7)
      .notNullable()

    table.string('cnae_secundary', 7)
      .notNullable()

    table.string('id_responsible')
      .references('id_responsible_client')
      .inTable('company_responsible_client')
      .notNullable()

    table.string('id_accounting_company')
      .references('id_company')
      .inTable('data_company')
      .notNullable()

    table.timestamp('created_at')
      .defaultTo(dbActions.fn.now())
      .notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return await dbActions.schema.dropTableIfExists('accounting_company_client')
}
