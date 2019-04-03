import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthService} from '../authentication/auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = this.authService.getToken();
    const usernameOrEmail = this.authService.getUsernameOrEmail();

    if (jwt && usernameOrEmail) {
      request = request.clone(
        {setHeaders: {Authorization: jwt}}
      );
    }
    return next.handle(request);
  }
}
