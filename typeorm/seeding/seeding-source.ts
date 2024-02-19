import { SeedingSource } from '@concepta/typeorm-seeding'
import UserSeeder from './seeders/UserSeeder'
import { getDataSource } from '../data-source'

const AppDataSource = await getDataSource()

export default new SeedingSource({
  dataSource: AppDataSource,
  seeders: [UserSeeder]
})
