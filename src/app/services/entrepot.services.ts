import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Entrepot} from '../models/manage-stocks/entrepot.model';
import {Emplacement} from '../models/manage-stocks/emplacement.model';

@Injectable()
export class EntrepotServices {

  constructor(public http: Http) {

  }

  /*===================================================entrepot=========================================================*/

  listEntrepot() {
    return this.http.get('http://localhost:8080/stocks/entrepots');
  }

  followEntrepot(id: number) {
    return this.http.get('http://localhost:8080/stocks/entrepots/' + id);
  }

  deleteEntrepot(id: number) {
    return this.http.delete('http://localhost:8080/stocks/entrepots/' + id);
  }

  saveEntrepot(entrepot: Entrepot) {
    return this.http.post('http://localhost:8080/stocks/entrepots', entrepot);
  }

  updateEntrepot(entrepot: Entrepot) {
    return this.http.post('http://localhost:8080/stocks/entrepots', entrepot);
  }
  /*=================================================entrpot============================================================*/


  /*=================================================emplacemet=========================================================*/

  listEmplOfAllEntr() {
    return this.http.get('http://localhost:8080/stocks/entrepots/emplacements');
  }

  saveEmplOfEntr(emplacement:Emplacement)
  {
    return this.http.post('http://localhost:8080/stocks/entrepots/emplacements',emplacement);
  }

  updateEmplOfEntr(emplacement:Emplacement)
  {
    return this.http.post('http://localhost:8080/stocks/entrepots/emplacements', emplacement);
  }

  followEmplOfEntr(id:number)
  {
    return this.http.get('http://localhost:8080/stocks/entrepots/emplacements' + id);
  }

  deleteEmplOfEntr(id:number)
  {
    return this.http.delete('http://localhost:8080/stocks/entrepots/emplacements'+id);
  }

  //==========================================================end=======================================================


  //==============================Nombre de produit dans un emplacement d'un entrepot===================================

  listCntPrdctOfEmpl(id:number)
  {
    return this.http.get('http://localhost:8080/stocks/entrepots/emplacements/count-product-of-emplacement'+id);
  }
  //============================end=====================================================================================


  //==================================Listing des produits d'un emplacement dans un entrepôt============================

  listPrdctOfEmpl(id:number)
  {
    return this.http.get('http://localhost:8080/stocks/entrepots/emplacements/products-of-emplacement'+id);
  }
  //======================================end===========================================================================

  //===========================================Nombre de portables dans un emplacement d'un entrepôt====================

  countPortItemOfEmpl(id:number)
  {
    return this.http.get('http://localhost:8080/stocks/entrepots/emplacements/count-portable-items-of-emplacement'+id);
  }

  //=========================================end========================================================================

  //=================================Listing des mouvements concernant un entrepôt donné================================

  listMvtOfEntr(id:number)
  {
    return this.http.get('http://localhost:8080/stocks/entrepots/mouvments-of-entrepot'+id);
  }

  //====================================================================================================================

  //==================================Listing de tous les produits d'un entrepôt donné==================================

  listPrdctOfEntr(id:number)
  {
    return this.http.get('http://localhost:8080/stocks/entrepots/mouvments-of-entrepot'+id);
  }

  //====================================================================================================================

  //===============================Nombre des produits d'un entrepôt donné==============================================

  cntPrdctOfEntr(id:number)
  {
    return this.http.get('http://localhost:8080/stocks/entrepots/count-product-of-entrepot'+id);
  }
//======================================================================================================================



//==================================================Nombre de portables d'un entrepôt===================================
  cntPortItemOfEntr(id:number)
  {
    return this.http.get('http://localhost:8080/stocks/entrepots/count-portable-items-of-entrepot'+id);
  }
//======================================================================================================================

//==================================list des emplacements d'un entrepot=================================================

  listEmplOfEntr(id:number)
  {
    return this.http.get('http://localhost:8080/stocks/entrepots/emplacements-of-entrepot'+id);
  }
  //====================================================================================================================

  //====================================Test pour savoir si un entrepôt a encore de l'espace============================

  /*spaceOfEntr(id:number)
  {
    return this.http.get('');
  }*/




}
