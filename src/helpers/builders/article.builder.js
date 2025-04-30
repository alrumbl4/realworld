import { faker } from '@faker-js/faker'

export class ArticleBuilder {
    addTitleArticle() {
        this.titleArticle = faker.lorem.slug(3)
        return this
    }

    addDescriptionArticle() {
        this.descriptionArticle = faker.book.series()
        return this
    }

    addbodyArticle() {
        this.bodyArticle = faker.lorem.paragraphs()
        return this
    }

    addTegArticle(tagName) {
        this.tegArticle = faker.lorem.slug(1)
        return this
    }
}