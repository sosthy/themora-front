import {Workspace} from "./workspace.model";

export interface Employee {
  id: number;
  name: string;
  surname: string;
  phone: string;
  website: string;
  sex: string;
  photo: File;
  birthday: Date;
  hiringDate: Date;
  seniority: number;
  workspace: Workspace;
}
