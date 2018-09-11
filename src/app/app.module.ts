import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ImageUploadModule } from "angular2-image-upload";
import { CollapseModule } from 'ngx-bootstrap';
import { NgxEditorModule } from 'ngx-editor';
// import { FileUploadModule } from 'ng2-file-upload';
// import { LMarkdownEditorModule } from 'ngx-markdown-editor';
// import { MarkdownToHtmlModule } from 'ng2-markdown-to-html';
import { MarkdownModule } from 'ngx-markdown';
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
import { GeoService } from './articles/geo.service';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { RecoveryComponent } from './user/recovery/recovery.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FaqComponent } from './pages/faq/faq.component';
import { CrowdAddComponent } from './articles/crowd-add/crowd-add.component';

let config = new AuthServiceConfig([
	{
		id: GoogleLoginProvider.PROVIDER_ID,
		provider: new GoogleLoginProvider(environment.googleClientID)
	},
	{
		id: FacebookLoginProvider.PROVIDER_ID,
		provider: new FacebookLoginProvider(environment.facebookClientID)
	}
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
		// LMarkdownEditorModule,
		// MarkdownToHtmlModule.forRoot(),
		MarkdownModule.forRoot(),
		SocialLoginModule,
		// FileUploadModule
		ImageUploadModule.forRoot()
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
		SearchResultsComponent,
		RecoveryComponent,
		WelcomeComponent,
		FaqComponent,
		CrowdAddComponent
	],
	providers: [
		ArticlesService,
		ArticleService,
		UserService,
		AuthGuardService,
		GeoService,
		{ provide: AuthServiceConfig, useFactory: provideConfig }
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
