import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import {ACCOUNT_ID, API_USERS_BASE, API_USERS_SIGN_IN, AUTHENTICATED_USER, BEARER, TOKEN} from '../../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public signIn(usernameOrEmail: string, password: string) {
    return this.http.post<any>(`${API_USERS_BASE}${API_USERS_SIGN_IN}`, {usernameOrEmail, password}).pipe(
      map(
        data => {
          // console.log(data);
          sessionStorage.setItem(ACCOUNT_ID, data.accountId);
          sessionStorage.setItem(AUTHENTICATED_USER, usernameOrEmail);
          sessionStorage.setItem(TOKEN, `${BEARER} ${data.accessToken}`);
          return data;
        }
      )
    );
  }

  public logOut() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  public isAuthenticated() {
    const jwt = sessionStorage.getItem(TOKEN);
    const user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(jwt === null && user === null);
  }

  public getToken() {
    if (this.isAuthenticated()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  public getUsernameOrEmail() {
    if (this.isAuthenticated()) {
      return sessionStorage.getItem(AUTHENTICATED_USER);
    }
  }


}
