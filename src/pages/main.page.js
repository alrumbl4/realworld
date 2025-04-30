export class MainPage {
    constructor(page) {
        this.page = page

        //Text
        this.titleOfBlockWithFilters = page.locator('h6');

        //Element
        this.blockWithFilters = page.locator('div[class="sidebar"]');
        this.firstTag = page.locator('div[class="tag-list"]>button').nth(0);
        this.tabGlobalFeed = page.locator('li>button').nth(0);
        this.tabOfTag = page.locator('li>button').nth(1);
        this.tagOfFirstArticle = page.locator('div>a>ul>li').nth(0);
        this.tagOfSecondArticle = page.locator('div>a>ul>li').nth(0);
    }

    async openMainPage() {
        await this.page.goto('/');
    }

    async clickFirstTag() {
        await this.firstTag.click()
    }

    async clickTabGlobalFeed() {
        await this.tabGlobalFeed.click()
    }
}