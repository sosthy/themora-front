
import {AppMenu} from "./appmenu.model";

export interface AppRole {
  id: number;
  roleName: string;
  description: string;
  menus: Array<AppMenu>;
}
