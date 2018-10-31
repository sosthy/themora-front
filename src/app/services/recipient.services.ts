import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Recipient} from '../models/manage-stocks/recipient.model';
import {RecipientGroupe} from '../models/manage-stocks/recipient-groupe.model';
import {AuthenticationService} from '../authentication/authentication.service';

@Injectable()
export class RecipientServices {
  constructor(public http: Http, public authenticationService: AuthenticationService) {

  }

  // ===================================Listing et sauvegarde des recipients=============================================

  listAllRecip() {
    return this.http.get('http://localhost:8080/stocks/recipients', this.authenticationService.getHeaders());
  }

  saveRecipient(recipient: Recipient) {
    return this.http.post('http://localhost:8080/stocks/recipients', recipient, this.authenticationService.getHeaders());
  }

  // ====================================Suppression et récupération d'un recipient======================================

  listRecip(id: number) {
    return this.http.get('http://localhost:8080/stocks/recipients' + id, this.authenticationService.getHeaders());
  }

  deleteRecip(id: number) {
    return this.http.delete('http://localhost:8080/stocks/recipients' + id, this.authenticationService.getHeaders());
  }

  updaterecip(recipient: Recipient) {
     return this.http.post('http://localhost:8080/stocks/recipients', recipient, this.authenticationService.getHeaders());
  }

  // =================================Listing des recipients d'un groupe=================================================

  listRecipGroup(id: number) {
    return this.http.get('http://localhost:8080/stocks/recipients/recipients-of-groupe' + id,
      this.authenticationService.getHeaders());
  }

  // ==================================Ajoute un recipient à un groupe=====pas fini==============

  saveRecipGroup(id: number) {
     return this.http.get('http://localhost:8080/stocks/stocks/recipients /add-recipient-to-groupe?recipient=' +
       ' {idrecipient}&groupe= {idgroupe}' + id,
        this.authenticationService.getHeaders());
  }


  // ===================================listing et sauvegarde des groupes================================================

  listAllGroup() {
      return this.http.get('http://localhost:8080/stocks/recipients/groupes', this.authenticationService.getHeaders());
  }

  saveGroup(recipientGroupes: RecipientGroupe) {
      return this.http.post('http://localhost:8080/stocks/recipients/groupes', recipientGroupes,
         this.authenticationService.getHeaders());
  }

  // ================================Suppression et récupération d'un groupe=============================================

  listGroup(id: number) {
      return this.http.get('http://localhost:8080/stocks/recipients/groupes' + id,
        this.authenticationService.getHeaders());
  }

  deletegroup(id: number) {
    return this.http.delete('http://localhost:8080/stocks/recipients/groupes' + id,
      this.authenticationService.getHeaders());
  }

  updateGroup(recipientGroupes: RecipientGroupe) {
    return this.http.post('http://localhost:8080/stocks/recipients/groupes', recipientGroupes,
      this.authenticationService.getHeaders());
  }
}
