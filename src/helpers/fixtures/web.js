import { test as base } from '@playwright/test';
import { InitializingPages } from '../../../src/pages/indexPages'
import { RandomUserBuilder, ArticleBuilder } from '../builders/indexBuilders'

export const test = base.extend({
  initializingPages: async ({ page }, use) => {
    const initializingPages = new InitializingPages(page);
    await use(initializingPages);
  },

  usingRandomUser: async ({}, use) => {
    const randomUser = new RandomUserBuilder().addName().addEmail().addPassword();
    await use(randomUser);
  },

  usingRandomArticle: async ({}, use) => {
    const randomArticle = new ArticleBuilder().addTitleArticle().addDescriptionArticle().addbodyArticle().addTegArticle()
    await use(randomArticle);
  },

});


export { expect } from '@playwright/test';