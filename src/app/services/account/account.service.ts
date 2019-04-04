import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Account} from '../../models/account/account.model';
import {API_USERS_BASE, API_USERS_ME} from '../../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(public http: HttpClient) {
  }

  getAccountDetails(id: number) {
    return this.http.get<Account>(`${API_USERS_BASE}/${id}`);
  }

  getAccountDetailsByUsername(usernameOrEmail: string) {
    return this.http.get<Account>(API_USERS_ME, {headers: {'usernameOrEmail': usernameOrEmail}});
  }
}
