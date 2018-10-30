import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {AccountsService} from '../accounts.service';
import {Http} from '@angular/http';
import {AppMenu} from '../../models/appmenu.model';


@Component({
  selector: 'app-accounts',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  public data: any[];
  closeResult: string;
  addEditCardHeader: string;
  menus: Array<AppMenu> = new Array();
  mode = 1;

  constructor(private modalService: NgbModal,
              private accountsSerice: AccountsService) {}

  ngOnInit(): void {
    this.accountsSerice.getAllMenus().subscribe(data => {
      console.log(data);
    });
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
