export class HeaderPage {
    constructor(page) {
        this.page = page;

        //text
        this.userName = page.locator('div[class="nav-link dropdown-toggle cursor-pointer"]');

        //Button
        this.homeButton = page.locator('a[href="#/"]').nth(1)
        this.loginButton = page.locator('a[href="#/login"]');
        this.signUpButton = page.locator('a[href="#/register"]');
        this.createNewArticleButton = page.locator('a[href="#/editor"]');
        this.profileButton = page.locator('li>div[class="nav-link dropdown-toggle cursor-pointer"]');
        this.profileInDropdownButton = page.getByRole('link', { name: 'Profile' })
        this.logoutButton = page.locator('div>a[href="#/"]').nth(1)
    }

    async clickLoginButton() {
        await this.loginButton.click()
    }

    async clickSighUpButton() {
        await this.signUpButton.click()
    }

    async clickCreateNewArticleButton() {
        await this.createNewArticleButton.click()
    }

    async clickProfileButton() {
        await this.profileButton.click()
        await this.profileInDropdownButton.click()
    }

    async clickLogoutButton() {
        await this.profileButton.click()
        await this.logoutButton.click()
    }
}