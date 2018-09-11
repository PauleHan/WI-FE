import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleDescComponent } from './articles/article-desc/article-desc.component';
import { ArticleAddComponent } from './articles/article-add/article-add.component';
import { CrowdAddComponent } from './articles/crowd-add/crowd-add.component';
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { RecoveryComponent } from './user/recovery/recovery.component';
import { CabinetComponent } from './user/cabinet/cabinet.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FaqComponent } from './pages/faq/faq.component';

import { AuthGuardService } from './user/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        component: ArticlesComponent
    },
    {
        path: 'long-grid/:author/:permlink',
        component: ArticleDescComponent
    },
    {
        path: 'long-grid-add',
        component: ArticleAddComponent
    },
    {
        path: 'crowd-add',
        component: CrowdAddComponent
    },
    {
        path: 'long-grid-edit/:id',
        component: ArticleEditComponent
    },
    {
        path: 'login',
        component: SignInComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'registration',
        component: SignUpComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'recovery',
        component: RecoveryComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'user',
        component: CabinetComponent,
        canActivate: [AuthGuardService]
    },
    {
        path: 'faq',
        component: FaqComponent
    },
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        component: SearchResultsComponent,
        path: 'search/:query',
    },
    {
        path: '404',
        component: NotFoundPageComponent,
    },
    {
        path: '**',
        redirectTo: '404' 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
