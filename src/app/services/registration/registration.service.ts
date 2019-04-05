import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_USERS_BASE, API_USERS_SIGN_UP} from '../../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  reigerAccount(account: any) {
    return this.http.post(`${API_USERS_BASE}${API_USERS_SIGN_UP}`, account);
  }
}
