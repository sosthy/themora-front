import { Injectable } from '@angular/core';
import { Menu } from './menu-items';

const STOCKSMENUITEMS = [
  {
    state: 'dashboard-stocks',
    name: 'HOME',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'products',
    name: 'PRODUCTS',
    type: 'sub',
    icon: 'basic-lock-open',
    children: [
      {
        state: 'phones',
        name: 'PHONES'
      },
    ]
  },
  {
    state: 'inventories',
    name: 'INVENTORIES',
    type: 'link',
    icon: 'basic-lock-open',
  },
  {
    state: 'recipients',
    name: 'RECIPIENTS',
    type: 'link',
    icon: 'basic-lock-open',
  },
];
const EMPLOYEESMENUITEMS = [
  {
    state: '/',
    name: 'HOME',
    type: 'link',
    icon: 'basic-accelerator'
  },
  {
    state: 'employees',
    name: 'employees',
    type: 'sub',
    icon: 'basic-lock-open',
  },
  {
    state: 'docs',
    name: 'DOCS',
    type: 'link',
    icon: 'basic-sheet-txt'
  }
];

@Injectable()
export class MenuItems {

  constructor() {

  }

  getAllStocksMenu(): Menu[] {
    return STOCKSMENUITEMS;
  }

  addStocksMenu(menu: Menu) {
    STOCKSMENUITEMS.push(menu);
  }

  getAllEmployeesMenu(): Menu[] {
    return EMPLOYEESMENUITEMS;
  }

  addEmployeesMenu(menu: Menu) {
    EMPLOYEESMENUITEMS.push(menu);
  }
}
