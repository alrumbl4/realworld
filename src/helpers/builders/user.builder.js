import { faker } from '@faker-js/faker'

export class RandomUserBuilder {
    addName() {
        this.userName = faker.internet.username()
        return this
    }

    addEmail() {
        this.email = faker.internet.email()
        return this
    }

    addPassword() {
        this.password = faker.internet.password()
        return this
    }
}