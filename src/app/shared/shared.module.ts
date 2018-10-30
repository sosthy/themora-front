import { NgModule } from '@angular/core';

import {StocksMenuItems} from './menu-items/stocks-menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';
import {EmployeesMenuItems} from "./menu-items/employees-menu-items";
import {AccountsMenuItems} from "./menu-items/accounts-menu-items";

@NgModule({
  declarations: [ AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective, ToggleFullscreenDirective ],
  exports:      [ AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective, ToggleFullscreenDirective ],
  providers: 	[ StocksMenuItems, EmployeesMenuItems, AccountsMenuItems ]
})
export class SharedModule { }
