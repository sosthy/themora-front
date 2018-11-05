
import {AppMenu} from "./appmenu.model";

export class AppRole {
  id: number;
  roleName: string;
  description: string;
  menus: Array<AppMenu>;
}
