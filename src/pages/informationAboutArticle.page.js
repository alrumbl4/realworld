export class InformationAboutArticle {
    constructor(page) {
        this.page = page

        //Text
        this.titleArticle = page.locator('h1')

        //Button
        this.editArticleButton = page.locator('button:has-text(" Edit Article")').first()
        this.deleteArticleButton = page.locator('button:has-text(" Delete Article")').first()
    }

    async clickEditArticleButton() {
        await this.editArticleButton.click()
    }

    async clickDeleteArticleButton() {
        await this.deleteArticleButton.click()
    }
}