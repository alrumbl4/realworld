export class AuthorizationPage {
    constructor(page) {
        this.page = page

        //Text
        this.pageTitle = page.locator('h1');
        this.authorizationError = page.locator('ul[class="error-messages"]>li')

        //Field
        this.emailField = page.locator('input[name="email"]')
        this.passwordField = page.locator('input[name="password"]')

        //Button
        this.loginButton = page.locator('button')
    }

    async authorizationUser(email, password) {
        await this.emailField.click()
        await this.emailField.fill(email)
        await this.passwordField.click()
        await this.passwordField.fill(password)
        await this.loginButton.click()
    }
}