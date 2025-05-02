import { test, expect } from '../src/helpers/fixtures/web.js';

test.describe('Создание и редактирование статьи', () => {

    test.beforeEach(async ({ initializingPages }) => {
        await initializingPages.mainPage.openMainPage()
        await initializingPages.headerPage.clickLoginButton()
        await initializingPages.authorizationPage.authorizationUser(process.env.TEST_USER_EMAIL, process.env.TEST_USER_PASSWORD)
      });

    test.afterEach(async ({ initializingPages, page }) => {
        //TODO: переписать на API
        page.on('dialog', async (dialog) => {
            await dialog.accept();
        });
        await initializingPages.informationAboutArticle.clickDeleteArticleButton()
      });

    test('Успешное создание новой статьи', async ({ initializingPages, usingRandomArticle }) => {
        await initializingPages.headerPage.clickCreateNewArticleButton()
        await initializingPages.articleCreation.addNewArticle(usingRandomArticle)
        await expect(initializingPages.informationAboutArticle.titleArticle).toHaveText(usingRandomArticle.titleArticle)
    });

    test('Редактирование заголовка статьи', async ({ initializingPages, usingRandomArticle }) => {
        await initializingPages.headerPage.clickCreateNewArticleButton()
        await initializingPages.articleCreation.addNewArticle(usingRandomArticle)
        await initializingPages.informationAboutArticle.clickEditArticleButton()
        await initializingPages.articleCreation.editingTitleField('Мой новый заголовок 154')
        await expect(initializingPages.informationAboutArticle.titleArticle).toHaveText('Мой новый заголовок 154')
    });
})

test.describe('Удаление статьи', () => {

    test.beforeEach(async ({ initializingPages }) => {
        await initializingPages.mainPage.openMainPage()
        await initializingPages.headerPage.clickLoginButton()
        await initializingPages.authorizationPage.authorizationUser(process.env.TEST_USER_EMAIL, process.env.TEST_USER_PASSWORD)
      });

    test('Удаление статьи', async ({ initializingPages, usingRandomArticle, page }) => {
        await initializingPages.headerPage.clickCreateNewArticleButton()
        await initializingPages.articleCreation.addNewArticle(usingRandomArticle)
        page.on('dialog', async (dialog) => {
            await dialog.accept();
        });
        await initializingPages.informationAboutArticle.clickDeleteArticleButton()
        //Проверка используется в качестве дополнительного ожидания. Без переход на страницу профиля осуществляется раньше, ченм нужно для теста
        await expect(initializingPages.headerPage.homeButton).toHaveAttribute('aria-current', 'page');
        await initializingPages.headerPage.clickProfileButton()
        await expect(initializingPages.profilePage.textAboutAbsenceOfArticles).toBeVisible()
        await expect(initializingPages.profilePage.textAboutAbsenceOfArticles).toHaveText("alrumbl4 doesn't have articles.")
    });
})
