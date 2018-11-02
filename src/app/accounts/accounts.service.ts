

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {TELCOPRO_URL} from '../models/config.model';
import {AuthenticationService} from '../authentication/authentication.service';
import { AppMenu } from '../models/appmenu.model';

@Injectable()
export class AccountsService {

  constructor(private http: Http, private auth: AuthenticationService) {}

// ------------------------------------------------------------
  getAllMenus() {
    return this.http.get(TELCOPRO_URL + '/menus', this.auth.getHeaders()).map(res => res.json());
  }

  getMenu(id) {
    return this.http.get(TELCOPRO_URL + '/');
  }

  saveMenu(menu: AppMenu) {
    return this.http.post(TELCOPRO_URL + '/menus', menu, this.auth.getHeaders()).map(res => res.json());
  }

  deleteMenu(id) {
    return this.http.delete(TELCOPRO_URL + '/');
  }
// ------------------------------------------------------------

  getAllRoles() {
    return this.http.get(TELCOPRO_URL + '/roles', this.auth.getHeaders()).map(res => res.json());
  }

  getRole(id) {
    return this.http.get(TELCOPRO_URL + '/');
  }

  saveRole(menu) {
    return this.http.post(TELCOPRO_URL + '/', menu, this.auth.getHeaders()).map(res => res.json());
  }

  deleteRole(id) {
    return this.http.delete(TELCOPRO_URL + '/');
  }
// ------------------------------------------------------------
  getAllUsers() {
    return this.http.get(TELCOPRO_URL + '/');
  }

  getUser(id) {
    return this.http.get(TELCOPRO_URL + '/');
  }

  saveUser(menu) {
    return this.http.post(TELCOPRO_URL + '/', menu, this.auth.getHeaders()).map(res => res.json());
  }

  deleteUser(id) {
    return this.http.delete(TELCOPRO_URL + '/');
  }
// -------------------------------------------------------------
  getAllEmployees() {
    return this.http.get(TELCOPRO_URL + '/');
  }
  getEmployee(id) {
    return this.http.get(TELCOPRO_URL + '/');
  }

  saveEmployee(menu) {
    return this.http.post(TELCOPRO_URL + '/', menu);
  }

  deleteEmployee(id) {
    return this.http.delete(TELCOPRO_URL + '/');
  }
}
