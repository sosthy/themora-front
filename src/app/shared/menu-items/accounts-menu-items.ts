import { Injectable } from '@angular/core';
import { Menu } from './menu-items';


const ACCOUNTMENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'users',
    name: 'users',
    type: 'link',
    icon: 'basic-lock-open',
  },
  {
    state: 'roles',
    name: 'roles',
    type: 'link',
    icon: 'basic-lock-open',
  },
  {
    state: 'menus',
    name: 'menus',
    type: 'link',
    icon: 'basic-sheet-txt'
  }
];

@Injectable()
export class MenuItems {

  constructor() {

  }

  getAllAccountsMenu(): Menu[] {
    return ACCOUNTMENUITEMS;
  }

}
