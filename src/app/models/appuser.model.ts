
import {Employee} from "./employee.model";

export interface AppUser {
  id: number;
  username: string;
  password: string;
  email: string;
  lockStatus: boolean;
  employee: Employee;
  roles: Array<string>;
}

