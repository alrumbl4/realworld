import { test, expect } from '../src/helpers/fixtures/web.js';

test.beforeEach(async ({ initializingPages }) => {
  await initializingPages.mainPage.openMainPage()
});


test('Переход на страницу авторизации', async ({ initializingPages }) => {
    await initializingPages.headerPage.clickLoginButton()
    await expect(initializingPages.authorizationPage.pageTitle).toHaveText('Sign in')
});

test('Успешная авторизация', async ({ initializingPages }) => {
    await initializingPages.headerPage.clickLoginButton()
    await initializingPages.authorizationPage.authorizationUser(process.env.TEST_USER_EMAIL, process.env.TEST_USER_PASSWORD)
    await expect(initializingPages.headerPage.userName).toHaveText('alrumbl4')
});

test('Неуспешная авторизация при вводе невалидного пароля', async ({ initializingPages }) => {
  await initializingPages.headerPage.clickLoginButton()
  await initializingPages.authorizationPage.authorizationUser(process.env.TEST_USER_EMAIL, '3456172839102')
  await expect(initializingPages.authorizationPage.authorizationError).toHaveText('Wrong email/password combination')
});


