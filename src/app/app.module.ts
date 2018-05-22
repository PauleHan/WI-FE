import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LongGridComponent } from './long-grid/long-grid.component';
import { PostsBoardComponent } from './posts-board/posts-board.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LongGridComponent,
    PostsBoardComponent,
    SignInComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
