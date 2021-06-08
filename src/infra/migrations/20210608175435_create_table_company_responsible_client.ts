import { Knex } from 'knex'
import dbActions from '../connect'

export async function up (knex: Knex): Promise<void> {
  return dbActions.schema.createTableIfNotExists('company_responsible_client', table => {
    table.string('id_responsible_client')
      .primary()
      .notNullable()

    table.string('name', 60)
      .notNullable()

    table.string('cpf', 11)
      .unique()
      .notNullable()

    table.timestamp('created_at')
      .defaultTo(dbActions.fn.now())
      .notNullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return dbActions.schema.dropTableIfExists('company_responsible_client')
}
