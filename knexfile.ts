import dotenv from 'dotenv'

dotenv.config()

export default {
  development: {
    client: process.env.DATABASE_CLIENT,
    connection: {
      database: process.env.DATABASE,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST
    },
    migrations: {
      tableName: 'migrations',
      directory: 'src/infra/migrations'
    }
  }

}
