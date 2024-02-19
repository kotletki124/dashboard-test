import { getDataSource } from '~/typeorm/data-source'
import { User } from '~/typeorm/entity/User'
import { ensureAuth } from '~/server/ensureAuth'

export default defineEventHandler(async (event) => {
  const user = ensureAuth(event)
  if (user?.isAdmin) {
    const body = await readBody(event)
    const AppDataSource = await getDataSource()
    const query = await AppDataSource.createQueryBuilder().select('user').from(User, 'user')

    if (body.search)
      query
        .where('name ILIKE :searchTerm', { searchTerm: `%${body.search}%` })
        .orWhere('email ILIKE :searchTerm', { searchTerm: `%${body.search}%` })
        .orWhere('phone ILIKE :searchTerm', { searchTerm: `%${body.search}%` })

    const rows = await query.offset(body.offset).limit(body.limit).getMany()
    const count = await query.getCount()

    return {
      rows,
      count
    }
  }
})
