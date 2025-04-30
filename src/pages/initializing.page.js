import { HeaderPage, MainPage, UserRegistrationPage, AuthorizationPage, ArticleCreation, InformationAboutArticle, ProfilePage } from "./indexPages";

export class InitializingPages {
	constructor(page) {
		this.page = page;
		this.headerPage = new HeaderPage(page)
        this.userRegistrationPage = new UserRegistrationPage(page)
        this.mainPage = new MainPage(page)
		this.authorizationPage = new AuthorizationPage(page)
		this.articleCreation = new ArticleCreation(page)
		this.informationAboutArticle = new InformationAboutArticle(page)
		this.profilePage = new ProfilePage(page)
	}
}