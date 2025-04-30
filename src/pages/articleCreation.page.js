export class ArticleCreation {
    constructor(page) {
        this.page = page;

        //Field
        this.titleArticleField = page.locator('input[name="title"]')
        this.descriptionArticleField = page.locator('input[name="description"]')
        this.bodyArticleField = page.locator('textarea[name="body"]')
        this.tagsArticleField = page.locator('input[name="tags"]')

        //Button
        this.publishArticleButton = page.locator('button');
        this.updateArticleButton = page.locator('button');
    }

    async addNewArticle(randomArticle) {
        const { titleArticle, descriptionArticle, bodyArticle, tegArticle } = randomArticle;
        await this.titleArticleField.click()
        await this.titleArticleField.fill(titleArticle)
        await this.descriptionArticleField.click()
        await this.descriptionArticleField.fill(descriptionArticle)
        await this.bodyArticleField.click()
        await this.bodyArticleField.fill(bodyArticle)
        await this.tagsArticleField.click()
        await this.tagsArticleField.fill(tegArticle)
        await this.publishArticleButton.click()
    }

    async editingTitleField (newTitleArticle) {
        await this.titleArticleField.click()
        await this.titleArticleField.fill(newTitleArticle)
        await this.updateArticleButton.click()
    }
}