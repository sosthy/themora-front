import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Product} from '../models/manage-stocks/product.model';
import {AppColor} from '../models/manage-stocks/app-color.model';
import {AuthenticationService} from '../authentication/authentication.service';
import {TELCOPRO_URL} from '../models/config.model';
import {StaggerAst} from '@angular/animations/browser/src/dsl/animation_ast';
import {State} from '../models/manage-stocks/state.model';

@Injectable()
export class ProductServices {
  constructor(public http: Http, public authenticationService: AuthenticationService) {

  }

  // ==============================listting et sauvegarde des stocks=====================================================
  listAllStocks() {
    return this.http.get(TELCOPRO_URL + '/stocks', this.authenticationService.getHeaders());
  }

  saveStocks(products: Product) {
    return this.http.post(TELCOPRO_URL + '/stocks', products, this.authenticationService.getHeaders());
  }

  // =====================Suppression et récupération d'un élément du stock==============================================

  listStocks(id: number) {
    return this.http.get(TELCOPRO_URL + '/stocks' + id, this.authenticationService.getHeaders());
  }

  deleteStocks(id: number) {
    return this.http.delete(TELCOPRO_URL + '/stocks' + id, this.authenticationService.getHeaders());
  }

  updateStocks(products: Product) {
    return this.http.post(TELCOPRO_URL + '/stocks', products, this.authenticationService.getHeaders());
  }

  // ===========================================Mouvements concernant un stock===========================================

  listMvtStocksI(id: number) {
    return this.http.get(TELCOPRO_URL + '/stocks/mouvments-of-product' + id, this.authenticationService.getHeaders());
  }

  // ===========================================Mouvements concernant un stock par rapport à un employé==================

  listMvtStocksEmp(id: number) {
    return this.http.get(TELCOPRO_URL + '/stocks/mouvment-of-employee' + id, this.authenticationService.getHeaders());
  }

  // ==========================================Listing et sauvegarde des appColor========================================

  listAllappColor() {
    return this.http.get(TELCOPRO_URL + '/stocks/app-colors', this.authenticationService.getHeaders());
  }

  saveAppColor(appColor: AppColor) {
    return this.http.post(TELCOPRO_URL + '/stocks/app-colors', appColor, this.authenticationService.getHeaders());
  }

  // =========================================Suppression et récupération d'un élément du appColor=======================

  deleteAppColor(id: number) {
    return this.http.get(TELCOPRO_URL + '/stocks/app-colors' + id, this.authenticationService.getHeaders());
  }

  listAppColor(id: number) {
    return this.http.get(TELCOPRO_URL + '/stocks/app-colors' + id, this.authenticationService.getHeaders());
  }

  updateAppColor(appColor: AppColor) {
    return this.http.post(TELCOPRO_URL + '/stocks/colors', appColor, this.authenticationService.getHeaders());
  }

  // ================================Listing des couleurs du stock=======================================================

  listAllColorStocks() {
    return this.http.get(TELCOPRO_URL + '/stocks/colors', this.authenticationService.getHeaders());
  }

  // ===============================Listing des produits d'une couleur donnée============================================

  listProdColor(name: string) {
    return this.http.get(TELCOPRO_URL + '/stocks/poducts-color/blue' + name, this.authenticationService.getHeaders());
  }

  // ===========================Listing, Modification et Sauvegarde des états d'un produit  ===============================
  listAllState() {
    return this.http.get(TELCOPRO_URL + '/stocks/states', this.authenticationService.getHeaders());
  }
  saveState(state: State) {
    return this.http.post(TELCOPRO_URL + '/stocks/states', state, this.authenticationService.getHeaders());
  }
   updateState(state: State) {
    return this.http.post(TELCOPRO_URL + '/stocks/states', state, this.authenticationService.getHeaders());
  }

  // ==============================Suppression et récupération d'un élément d'un état=======================================
  listState(id: number) {
    return this.http.get(TELCOPRO_URL + '/stocks/states' + id, this.authenticationService.getHeaders());
  }
   deleteState(id: number) {
    return this.http.get(TELCOPRO_URL + '/stocks/states' + id, this.authenticationService.getHeaders());
  }


}





