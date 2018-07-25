import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CollapseModule } from 'ngx-bootstrap';
import { NgxEditorModule } from 'ngx-editor';
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from 'angularx-social-login';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { OffcanvasComponent } from './header/offcanvas/offcanvas.component';
import { FooterComponent } from './footer/footer.component';

import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { CabinetComponent } from './user/cabinet/cabinet.component';
import { UserService } from './user/user.service';
import { AuthGuardService } from './user/auth-guard.service';

import { ArticlesComponent } from './articles/articles.component';
import { ArticlesService } from './articles/articles.service';
import { ArticleAddComponent } from './articles/article-add/article-add.component';
import { ArticleItemComponent } from './articles/article-item/article-item.component';
import { ArticleDescComponent } from './articles/article-desc/article-desc.component';
import { ArticleService } from './articles/article-desc/article.service';
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

let config = new AuthServiceConfig([
	{
		id: GoogleLoginProvider.PROVIDER_ID,
		provider: new GoogleLoginProvider(environment.googleClientID)
	}
	// {
	//   id: FacebookLoginProvider.PROVIDER_ID,
	//   provider: new FacebookLoginProvider("Facebook-App-Id")
	// }
]);

export function provideConfig() {
	return config;
}

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		AppRoutingModule,
		CollapseModule.forRoot(),
		NgxEditorModule,
		SocialLoginModule
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		ToolbarComponent,
		NavbarComponent,
		OffcanvasComponent,
		FooterComponent,
		SignInComponent,
		SignUpComponent,
		CabinetComponent,
		ArticlesComponent,
		ArticleAddComponent,
		ArticleItemComponent,
		ArticleDescComponent,
		ArticleEditComponent,
		SidebarComponent,
		NotFoundPageComponent,
		SearchResultsComponent
	],
	providers: [
		ArticlesService,
		ArticleService,
		UserService,
		AuthGuardService,
		{ provide: AuthServiceConfig, useFactory: provideConfig }
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
