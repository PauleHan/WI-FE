import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap';
import { NgxEditorModule } from 'ngx-editor';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleItemComponent } from './articles/article-item/article-item.component';
import { ArticleDescComponent } from './articles/article-desc/article-desc.component';
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        CollapseModule.forRoot(),
        NgxEditorModule,
        CoreModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        ToolbarComponent,
        NavbarComponent,
        FooterComponent,
        SignInComponent,
        SignUpComponent,
        ArticlesComponent,
        ArticleItemComponent,
        ArticleDescComponent,
        ArticleEditComponent,
        SidebarComponent,
        NotFoundPageComponent,
        SearchResultsComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
