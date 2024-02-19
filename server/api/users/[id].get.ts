import { getDataSource } from '~/typeorm/data-source'
import { User } from '~/typeorm/entity/User'
import { ensureAuth } from '~/server/ensureAuth'

export default defineEventHandler(async (event) => {
  const { id } = event.context.params
  const user = ensureAuth(event)
  if (user?.id === id || user?.isAdmin) {
    const AppDataSource = await getDataSource()
    const data = await AppDataSource.createQueryBuilder()
      .select('user')
      .from(User, 'user')
      .where('id = :id', { id })
      .getOne()

    return data
  }
})
