import { Seeder } from '@concepta/typeorm-seeding'
import UserFactory from '../factories/UserFactory'

export default class UserSeeder extends Seeder {
  async run() {
    const userFactory = this.factory(UserFactory)
    await userFactory.create({
      email: 'admin@example.com',
      password: '123',
      isBlocked: false,
      isAdmin: true
    })
    await userFactory.createMany(250)
  }
}
