import { test, expect } from '../src/helpers/fixtures/web.js';

test.beforeEach(async ({ initializingPages }) => {
    await initializingPages.mainPage.openMainPage()
    await initializingPages.headerPage.clickLoginButton()
    await initializingPages.authorizationPage.authorizationUser(process.env.TEST_USER_EMAIL, process.env.TEST_USER_PASSWORD)
});

test('Выход из учетной записи пользователя', async ({ initializingPages }) => {
    await initializingPages.headerPage.clickLogoutButton()
    await expect(initializingPages.headerPage.homeButton).toHaveAttribute('aria-current', 'page');
    await expect(initializingPages.headerPage.loginButton).toBeVisible()
    await expect(initializingPages.headerPage.signUpButton).toBeVisible()
    await expect(initializingPages.headerPage.userName).not.toBeVisible()
});
