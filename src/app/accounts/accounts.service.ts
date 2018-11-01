

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {TELCOPRO_URL} from "../models/config.model";
import {AuthenticationService} from "../authentication/authentication.service";

@Injectable()
export class AccountsService {

  constructor(private http: Http, private auth: AuthenticationService) {}

// ------------------------------------------------------------
  getAllMenus() {
    return this.http.get(TELCOPRO_URL + '/menus', this.auth.getHeaders());
  }

  getMenu(id) {
    return this.http.get(TELCOPRO_URL + '/');
  }

  saveMenu(menu) {
    return this.http.post(TELCOPRO_URL + '/', menu, this.auth.getHeaders());
  }

  deleteMenu(id) {
    return this.http.delete(TELCOPRO_URL + '/');
  }
// ------------------------------------------------------------

  getAllRoles() {
    return this.http.get(TELCOPRO_URL + '/roles', this.auth.getHeaders());
  }

  getRole(id) {
    return this.http.get(TELCOPRO_URL + '/');
  }

  saveRole(menu) {
    return this.http.post(TELCOPRO_URL + '/', menu, this.auth.getHeaders());
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
    return this.http.post(TELCOPRO_URL + '/', menu, this.auth.getHeaders());
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
