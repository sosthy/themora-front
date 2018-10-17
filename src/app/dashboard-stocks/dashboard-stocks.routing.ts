import { Routes } from '@angular/router';

import { StocksDashboardComponent } from './dashboard-stocks.component';

export const StocksDashboardRoutes: Routes = [{
  path: '',
  component: StocksDashboardComponent,
  data: {
    heading: 'Dashboard'
  }
}];
