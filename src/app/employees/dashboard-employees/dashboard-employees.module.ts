import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import {EmployeesDashboardComponent} from './dashboard-employees.component';
import { EmployeesDashboardRoutes } from './dashboard-employees.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(EmployeesDashboardRoutes)],
  declarations: [EmployeesDashboardComponent]
})

export class EmployeesDashboardModule {}
