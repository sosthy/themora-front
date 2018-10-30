import { Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import {RolesComponent} from "./roles/roles.component";
import {MenusComponent} from "./menus/menus.component";

export const AccountsRoutes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    data: {
      heading: 'Users'
    },
  },
  {
    path: 'roles',
    component: RolesComponent,
    data: {
      heading: 'Roles'
    },
  },
  {
    path: 'menus',
    component: MenusComponent,
    data: {
      heading: 'Menus'
    },
  },

];
