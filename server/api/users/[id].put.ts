import { getDataSource } from '~/typeorm/data-source'
import { User } from '~/typeorm/entity/User'
import { ensureAuth } from '~/server/ensureAuth'
import 'dotenv/config'

function isEmpty(obj = {}) {
  for (const key in obj) {
    if (obj[key] !== undefined) {
      return false
    }
  }
  return true
}

export default defineEventHandler(async (event) => {
  if (process.env.ALLOW_EDIT === 'true' || process.env.ALLOW_EDIT === 'blockOnly') {
    const user = ensureAuth(event)
    if (user?.isAdmin) {
      const { id } = event.context.params
      const body = await readBody(event)
      const { id: _, password, isBlocked, ...bodyData } = body
      const AppDataSource = await getDataSource()

      let data = process.env.ALLOW_EDIT === 'blockOnly' ? { isBlocked } : { ...bodyData, isBlocked }

      if (!isEmpty(data)) {
        const response = await AppDataSource.createQueryBuilder()
          .update(User)
          .set(data)
          .where('id = :id', { id })
          .execute()

        return response
      }
    }
  }
})
