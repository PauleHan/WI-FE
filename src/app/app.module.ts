import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { AppComponent } from './app.component';
import { LongGridComponent } from './long-grid/long-grid.component';
import { PostsBoardComponent } from './posts-board/posts-board.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BlockSidebarComponent } from './block-sidebar/block-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarComponent } from './header/toolbar/toolbar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleItemComponent } from './articles/article-item/article-item.component';
import { ArticleDescComponent } from './articles/article-desc/article-desc.component';
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    LongGridComponent,
    PostsBoardComponent,
    SignInComponent,
    BlockSidebarComponent,
    HeaderComponent,
    ToolbarComponent,
    NavbarComponent,
    FooterComponent,
    ArticlesComponent,
    ArticleItemComponent,
    ArticleDescComponent,
    ArticleEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
