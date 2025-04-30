export class HeaderPage {
    constructor(page) {
        this.page = page;

        //text
        this.userName = page.locator('div[class="nav-link dropdown-toggle cursor-pointer"]');

        //Button
        this.homeButton = page.locator('a[href="#/"]').nth(1)
        this.signInButton = page.locator('a[href="#/login"]');
        this.signUpButton = page.locator('a[href="#/register"]');
        this.createNewArticleButton = page.locator('a[href="#/editor"]');
        this.profileButton = page.locator('li>div[class="nav-link dropdown-toggle cursor-pointer"]');
        this.profileInDropdownButton = page.getByRole('link', { name: 'Profile' })
    }

    async clickSignInButton() {
        await this.signInButton.click()
    }

    async clickSighUpButton() {
        await this.signUpButton.click()
    }

    async clickCreateNewArticleButton() {
        await this.createNewArticleButton.click()
    }

    async clickProfileButton() {
        await this.profileButton.click()
    }

    async clickProfileInDropdownButton() {
        await this.profileInDropdownButton.click()
    }
}