
import { test, expect } from '../src/helpers/fixtures/web.js';

test.beforeEach(async ({ initializingPages }) => {
  await initializingPages.mainPage.openMainPage()
});


test('Переход на страницу регистрации пользователя', async ({ initializingPages }) => {
  await initializingPages.headerPage.clickSighUpButton()
  await expect(initializingPages.userRegistrationPage.pageTitle).toHaveText('Sign up')
});

test('Успешная регистрация', async ({ initializingPages, usingRandomUser }) => {
  await initializingPages.headerPage.clickSighUpButton()
  await initializingPages.userRegistrationPage.registeringNewUser(usingRandomUser)
  await expect(initializingPages.headerPage.userName).toHaveText(usingRandomUser.userName)
});

test('Переход на страницу авторизации пользователя со страницы регистрации', async ({ initializingPages }) => {
  await initializingPages.headerPage.clickSighUpButton()
  await initializingPages.userRegistrationPage.clickToSwitchToSignIn()
  await expect(initializingPages.authorizationPage.pageTitle).toHaveText('Sign in')
});
