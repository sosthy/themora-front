import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { StocksDashboardComponent } from './dashboard-stocks.component';
import { StocksDashboardRoutes } from './dashboard-stocks.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(StocksDashboardRoutes)],
  declarations: [StocksDashboardComponent]
})

export class StocksDashboardModule {}
