import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LongGridComponent } from './long-grid/long-grid.component';
import { PostsBoardComponent } from './posts-board/posts-board.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
    {
      path: '',
      component: PostsBoardComponent
    },
    {
      path: 'long-grid/:id',
      component: LongGridComponent
    },
    {
      path: 'login',
      component: SignInComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
