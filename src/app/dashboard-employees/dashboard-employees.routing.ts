import { Routes } from '@angular/router';

import {EmployeesDashboardComponent} from './dashboard-employees.component';

export const EmployeesDashboardRoutes: Routes = [{
  path: '',
  component: EmployeesDashboardComponent,
  data: {
    heading: 'Dashboard'
  }
}];
