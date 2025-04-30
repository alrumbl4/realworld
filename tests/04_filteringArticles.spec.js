import { test, expect } from '../src/helpers/fixtures/web.js';

test.beforeEach(async ({ initializingPages }) => {
    await initializingPages.mainPage.openMainPage()
});


test('Отображение на главной блока с популярными фильтрами для неавторизованного пользователя', async ({ initializingPages }) => {
    await expect(initializingPages.mainPage.blockWithFilters).toBeVisible()
    await expect(initializingPages.mainPage.titleOfBlockWithFilters).toHaveText('Popular Tags')
});

test('Фильтрация статей по выбранному тегу', async ({ initializingPages }) => {
    const firstTagText = await initializingPages.mainPage.firstTag.textContent();

    await initializingPages.mainPage.clickFirstTag()
    await expect(initializingPages.mainPage.tabOfTag).toBeVisible()
    await expect(initializingPages.mainPage.tabOfTag).toHaveText(firstTagText)
    await expect(initializingPages.mainPage.tagOfFirstArticle).toHaveText(firstTagText)
    await expect(initializingPages.mainPage.tagOfSecondArticle).toHaveText(firstTagText)
});

test('Сброс фильтров при переходе к глобальному поиску', async ({ initializingPages }) => {
    await initializingPages.mainPage.clickFirstTag()
    await initializingPages.mainPage.clickTabGlobalFeed()
    await expect(initializingPages.mainPage.tabOfTag).not.toBeVisible()
});
