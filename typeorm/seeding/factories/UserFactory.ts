import { Factory } from '@concepta/typeorm-seeding'
import { User } from '../../entity/User'
import { faker } from '@faker-js/faker'

export default class UserFactory extends Factory<User> {
  protected async entity(): Promise<User> {
    const user = new User()
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    user.name = `${firstName} ${lastName}`
    user.password = '123'
    user.email = faker.internet.email({ firstName, lastName })
    user.imageUrl = faker.internet.avatar()
    user.phone = `+49${faker.helpers.replaceSymbolWithNumber('##########')}`
    user.credits = Math.random() < 0.1 ? 0 : faker.number.int({ min: 0, max: 500 })
    user.tokens = faker.number.int({ min: 0, max: 50 })
    user.isBlocked = user.credits === 0 || Math.random() < 0.1
    user.isAdmin = false
    return user
  }
}
