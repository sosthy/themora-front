import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {AccountsService} from "../accounts.service";
import {AppRole} from "../../models/approle.model";
import {Employee} from "../../models/employee.model";


@Component({
  selector: 'app-accounts',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  public data: any[];
  closeResult: string;
  mode: number;
  addEditCardHeader: string;
  password: string;
  rolesSel: Array<AppRole> = new Array();
  roleSelected: Array<AppRole> = new Array();
  rolSelRemoved: Array<AppRole> = new Array();
  roles: Array<AppRole> = new Array();
  employee = '';
  employeeSelected: Array<Employee> = new Array();
  employees: Array<Employee> = new Array();

  constructor(private modalService: NgbModal, private accountsSerice: AccountsService) {}

  ngOnInit(): void {
    this.mode = 1;
    this.addEditCardHeader = 'Create Role';
    this.password = '********';

    this.accountsSerice.getAllRoles().subscribe(resp => {
      console.log(resp);
    });

    this.accountsSerice.getAllEmployees().subscribe(resp => {
      console.log(resp);
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

  onCreateUser(): void {
    this.addEditCardHeader = 'Create Role';
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
