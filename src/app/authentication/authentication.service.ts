import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TELCOPRO_URL } from '../models/config.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  token: any;
  user: User;

  constructor(private http: Http) {}

  onLogin(user: User) {
    return this.http.post(TELCOPRO_URL + '/login', user);
  }

  setToken(token: any) {
    this.token = token;
    localStorage.setItem('token', this.token);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);
    console.log(decodedToken);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }
}
