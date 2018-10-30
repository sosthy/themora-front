import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {AccountsService} from "../accounts.service";


@Component({
  selector: 'app-accounts',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public data: any[];
  closeResult: string;
  mode: number;
  addEditCardHeader: string;
  password: string;
  rolesSel: Array<string> = new Array();
  roleSelected: Array<string> = new Array();
  rolSelRemoved: Array<string> = new Array();
  roles: Array<string> = new Array();
  employee = '';
  employeeSelected: Array<string> = new Array();
  employees: Array<string> = new Array();

  constructor(private modalService: NgbModal, private accountsSerice: AccountsService) {}

  ngOnInit(): void {
    this.mode = 1;
    this.addEditCardHeader = 'Create User';
    this.password = '********';
    this.roles = ['RH', 'ADMIN', 'MAGASINIER', 'ORDER'];
    this.employees = ['Sosthene Nouebissi', 'Tcheche Romeo', 'Zuko Tinkam', 'Marie Paul'];
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

  onCreateUser(): void {
    this.addEditCardHeader = 'Create User';
    this.mode = 4;
  }

  onListUser(): void {
    this.mode = 1;
  }

  onDetailsUser(id: number): void {
    console.log(id);
    this.mode = 2;
  }

  addRole() {
    this.rolesSel.forEach(role => {
      if (role) {
        if(this.roles.find(r => r === role)) {
          this.roleSelected.push(role);
        }
        const index: number = this.roles.indexOf(role);
        if(index !== -1) {
          this.roles.splice(index, 1);
        }
        this.rolesSel = null;
      }
    });
  }

  onRoleChanged(role: string) {

  }

  clearSelectedRole() {
    this.rolSelRemoved.forEach(rol => {
      const index: number = this.roleSelected.indexOf(rol);
      if(index !== -1) {
        this.roleSelected.splice(index, 1);
      }
      this.roles.push(rol);
      this.rolSelRemoved = null;
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
