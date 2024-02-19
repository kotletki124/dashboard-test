import { getDataSource } from '~/typeorm/data-source'
import { User } from '~/typeorm/entity/User'
import * as bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

export default defineEventHandler(async (event) => {
  const { email, password: plainTextPassword } = await readBody(event)
  const AppDataSource = await getDataSource()
  const user = await AppDataSource.createQueryBuilder()
    .select('user')
    .addSelect('user.password')
    .from(User, 'user')
    .where('email = :email', { email })
    .getOne()
  const { password: hashedPassword, ...userData } = user

  if (user && user.isAdmin && (await bcrypt.compare(plainTextPassword, hashedPassword))) {
    const token = jwt.sign(userData, process.env.SECRET)
    return {
      token
    }
  } else
    throw createError({
      statusCode: 403,
      statusMessage: 'Unauthorized, hint: try `admin@example.com` as login and `123` as password'
    })
})
