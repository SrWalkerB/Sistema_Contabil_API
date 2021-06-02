import knexfile from '../../knexfile'
import knex from 'knex'

const dbActions = knex(knexfile.development)

export default dbActions
