import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RouteGuardService} from '../services/guards/route-guard.service';

import {SignInComponent} from '../components/signin/sign-in.component';
import {MyAccountComponent} from '../components/my-account/my-account.component';
import {ArticleListComponent} from '../components/articles/article-list/article-list.component';
import {ArticleEditComponent} from '../components/articles/article-edit/article-edit.component';
import {RegistrationComponent} from '../components/registration/registration.component';
import {ROUTE_ADD_ARTICLE, ROUTE_ARTICLES, ROUTE_LOGIN, ROUTE_MY_ACCOUNT, ROUTE_REGISTER} from '../constants/app.constants';

const appRoutes: Routes = [
  {path: '', redirectTo: ROUTE_LOGIN, pathMatch: 'full'},
  {path: ROUTE_LOGIN, component: SignInComponent},
  {path: ROUTE_REGISTER, component: RegistrationComponent},
  {path: ROUTE_ARTICLES, component: ArticleListComponent, canActivate: [RouteGuardService]},
  {path: ROUTE_MY_ACCOUNT, component: MyAccountComponent, canActivate: [RouteGuardService]},
  {path: ROUTE_ADD_ARTICLE, component: ArticleEditComponent, canActivate: [RouteGuardService]}
];

@NgModule({
  imports: [(RouterModule.forRoot(appRoutes))],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
