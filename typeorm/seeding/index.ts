import seedingSource from './seeding-source'
import { getDataSource } from '../data-source'
import { User } from '../entity/User'

seedingSource.initialize().then(async () => {
  const AppDataSource = await getDataSource()
  await AppDataSource.createQueryBuilder().delete().from(User).execute()
  console.log('Table cleared')
  seedingSource.run.all()
})
