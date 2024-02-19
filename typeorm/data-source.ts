import 'reflect-metadata'
import 'dotenv/config'
import { DataSource } from 'typeorm'
import { User } from './entity/User.ts'

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.POSTGRES_URL,
  synchronize: true,
  logging: false,
  entities: [User],
  //migrations: ['typeorm/migration/**/*{.ts,.js}'],
  subscribers: []
})

AppDataSource.initialize()

export const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource)
      else reject('Failed to create connection with database')
    }, delay)
  })
}
