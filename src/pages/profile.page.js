export class ProfilePage {
    constructor(page) {
        this.page = page

        //Text
        this.textAboutAbsenceOfArticles = page.locator('div[class="article-preview"]')

        //Button
        this.editProfileButton = page.getByRole('link', { name: 'Edit Profile Settings' })
    }
}