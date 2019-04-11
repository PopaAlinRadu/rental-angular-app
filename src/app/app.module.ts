import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import {ToastContainerModule, ToastrModule} from 'ngx-toastr';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {JwtInterceptorService} from './services/interceptors/jwt-interceptor.service';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {ArticleListComponent} from './components/articles/article-list/article-list.component';
import {SignInComponent} from './components/signin/sign-in.component';
import {MyAccountComponent} from './components/my-account/my-account.component';
import {ArticleDetailsComponent} from './components/articles/article-details/article-details.component';
import {FooterComponent} from './components/footer/footer.component';
import {ArticleEditComponent} from './components/articles/article-edit/article-edit.component';
import {RegistrationComponent} from './components/registration/registration.component';
import { MyAccountDetailsComponent } from './components/my-account/my-account-details/my-account-details.component';
import {NgPipesModule} from 'ngx-pipes';
import { ModalComponent } from './components/modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SignInComponent,
    ArticleListComponent,
    MyAccountComponent,
    ArticleDetailsComponent,
    FooterComponent,
    ArticleEditComponent,
    RegistrationComponent,
    MyAccountDetailsComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(
      {
        positionClass: 'toast-top-full-width',
        timeOut: 5000,
        progressBar: true,
        preventDuplicates: true
      }),
    ToastContainerModule,
    NgPipesModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
