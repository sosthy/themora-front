import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsRoutes} from './products.routing';
import {PortableServices} from '../services/portable.services';
import {ProductsComponent} from './products.component';
import {PhonesComponent} from './phones/phones.component.';


@NgModule({
  imports:
    [CommonModule,
      RouterModule.forChild(ProductsRoutes)
    ],
  declarations: [ProductsComponent, PhonesComponent],
  providers: [PortableServices],

})

export class ProductsModule {

}
