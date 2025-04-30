export class MainPage {
    constructor(page) {
        this.page = page
    }

    async openMainPage() {
        await this.page.goto('/');
    }
}