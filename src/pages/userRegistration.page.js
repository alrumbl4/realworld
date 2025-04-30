export class UserRegistrationPage {
    constructor(page) {
        this.page = page;

        //Text
        this.pageTitle = page.locator('h1');

        //Field
        this.userNameField = page.locator('input[name="username"]');
        this.emailField = page.locator('input[name="email"]');
        this.passwordField = page.locator('input[name="password"]');

        //Button
        this.signUpButton = page.locator('button');

        //Hyperlink
        this.switchToSignIn  = page.locator('p>a[href="#/login"]');
    }

    async registeringNewUser(randomUser) {
        const { userName, email, password } = randomUser;
        await this.userNameField.click()
        await this.userNameField.fill(userName)
        await this.emailField.click()
        await this.emailField.fill(email)
        await this.passwordField.click()
        await this.passwordField.fill(password)
        await this.signUpButton.click()
    }

    async clickToSwitchToSignIn() {
        await this.switchToSignIn.click()
    }
}