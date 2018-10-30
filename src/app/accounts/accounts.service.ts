

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {TELCOPRO_URL} from "../models/config.model";

@Injectable()
export class AccountsService {

  constructor(private http: Http) {}

// ------------------------------------------------------------
  getAllMenus() {
    return this.http.get(TELCOPRO_URL + '/');
  }

  getMenu(id) {
    return this.http.get(TELCOPRO_URL + '/');
  }

  saveMenu(menu) {
    return this.http.post(TELCOPRO_URL + '/', menu);
  }

  deleteMenu(id) {
    return this.http.delete(TELCOPRO_URL + '/');
  }
// ------------------------------------------------------------

  getAllRoles() {
    return this.http.get(TELCOPRO_URL + '/');
  }

  getRole(id) {
    return this.http.get(TELCOPRO_URL + '/');
  }

  saveRole(menu) {
    return this.http.post(TELCOPRO_URL + '/', menu);
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
    return this.http.post(TELCOPRO_URL + '/', menu);
  }

  deleteUser(id) {
    return this.http.delete(TELCOPRO_URL + '/');
  }
}
