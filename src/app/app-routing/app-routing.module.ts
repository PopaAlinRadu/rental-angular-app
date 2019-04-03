import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from '../components/welcome/welcome.component';
import {RouteGuardService} from '../services/guards/route-guard.service';
import {SignInComponent} from '../components/signin/sign-in.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/signIn', pathMatch: 'full'},
  {path: 'signIn', component: SignInComponent},
  {path: 'welcome', component: WelcomeComponent, canActivate: [RouteGuardService]}
];
@NgModule({
  imports: [(RouterModule.forRoot(appRoutes))],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
