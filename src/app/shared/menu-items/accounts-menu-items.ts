import { Injectable } from '@angular/core';
import { Menu } from './menu-items';


const ACCOUNTMENUITEMS = [

  {
    state: 'users',
    name: 'USERS',
    type: 'link',
    icon: ' fa fa-users',
  },
  {
    state: 'roles',
    name: 'ROLES',
    type: 'link',
    icon: ' fa fa-support',
  },
  {
    state: 'menus',
    name: 'MENUS',
    type: 'link',
    icon: ' fa fa-bookmark'
  }
];

@Injectable()
export class AccountsMenuItems {

  constructor() {

  }

  getAllAccountsMenu(): Menu[] {
    return ACCOUNTMENUITEMS;
  }

}
