import { Knex } from 'knex'
import dbActions from '../connect'

export async function up (knex: Knex): Promise<void> {
  return await dbActions.schema.createTableIfNotExists('address', table => {
    table.string('id_address')
      .primary()
      .notNullable()

    table.integer('cep', 8)
      .notNullable()

    table.string('road', 60)
      .notNullable()

    table.string('number', 10)
      .notNullable()

    table.string('district', 20)
      .notNullable()

    table.string('city', 30)
      .notNullable()

    table.string('state', 25)
      .notNullable()

    table.string('country', 25)
      .notNullable()

    table.timestamp('created_at')
      .defaultTo(dbActions.fn.now())
      .nullable()
  })
}

export async function down (knex: Knex): Promise<void> {
  return await dbActions.schema.dropTableIfExists('address')
}
