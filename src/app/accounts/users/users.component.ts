import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {AccountsService} from '../accounts.service';
import { AppUser } from '../../models/appuser.model';
import { Employee } from '../../models/employee.model';
import { AppRole } from '../../models/approle.model';


@Component({
  selector: 'app-accounts',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  user: AppUser = new AppUser();
  users: Array<AppUser> = new Array();
  public data: any[];
  closeResult: string;
  mode: number;
  addEditCardHeader: string;
  rolesSel: Array<AppRole> = new Array();
  roleSelected: Array<AppRole> = new Array();
  rolSelRemoved: Array<AppRole> = new Array();
  roles: Array<AppRole> = new Array();
  employee: Employee;
  employeeSelected: Array<Employee> = new Array();
  employees: Array<Employee> = new Array();

  constructor(private modalService: NgbModal, private accountsSerice: AccountsService) {}

  ngOnInit(): void {
    this.mode = 1;
    this.addEditCardHeader = 'Create User';
    this.init();
  }

  async init() {
    this.user = new AppUser();
    this.rolesSel = new Array();
    this.roleSelected = new Array();
    this.rolSelRemoved = new Array();

    this.roles = await this.accountsSerice.getAllRoles().toPromise();
    this.users = await this.accountsSerice.getAllUsers().toPromise();
    this.employees = await this.accountsSerice.getAllEmployees().toPromise();
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
        if (this.roles.find(r => r === role)) {
          this.user.roles.push(role);
        }
        const index: number = this.roles.indexOf(role);
        if (index !== -1) {
          this.roles.splice(index, 1);
        }
        this.rolesSel = null;
      }
    });
  }

  onRoleChanged(role: string) {

  }

  generatePassword() {
    const length = 8, charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let retVal = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    this.user.password = retVal;
  }

  onSaveUser() {
    console.log(this.user);
  }

  clearSelectedRole() {
    this.rolSelRemoved.forEach(rol => {
      const index: number = this.roleSelected.indexOf(rol);
      if (index !== -1) {
        this.user.roles.splice(index, 1);
      }
      this.roles.push(rol);
      this.rolSelRemoved = null;
    });
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
