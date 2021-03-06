import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {RegisterRequestInterface} from 'src/app/auth/types/registerRequest.interface';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {environment} from 'src/environments/environment';
import {AuthResponseInterface} from 'src/app/auth/types/authResponse.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login';
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user));
  }
  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user';
    return this.http.get(url)
    .pipe(map((response: AuthResponseInterface) => response.user));
  }
}
