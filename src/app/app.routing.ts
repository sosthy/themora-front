import { Routes } from '@angular/router';

import { EmployeesAdminLayoutComponent } from './layouts/employees-admin/employees-admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import {StocksAdminLayoutComponent} from './layouts/stocks-admin/stocks-admin-layout.component';
import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import { AccountsAdminLayoutComponent } from './layouts/accounts-admin/accounts-admin-layout.component';

export const AppRoutes: Routes = [{
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: '',
    loadChildren: './authentication/authentication.module#AuthenticationModule'
  }, {
    path: 'error',
    loadChildren: './error/error.module#ErrorModule'
  }]
}, {
  path: '',
  component: AdminLayoutComponent,
  children: [{
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  }]
}, {
  path: '',
  component: AccountsAdminLayoutComponent,
  children: [{
    path: 'accounts',
    loadChildren: './accounts/accounts.module#AccountsModule'
  }]
}, {
  path: '',
  component: StocksAdminLayoutComponent,
  children: [{
    path: 'dashboard-stocks',
    loadChildren: './inventories/dashboard-stocks/dashboard-stocks.module#StocksDashboardModule'
  }]
}, {
  path: '**',
  redirectTo: 'error/404'
}];

