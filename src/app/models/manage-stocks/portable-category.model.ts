import {Category} from './category.model';
import {Portable} from './portable.model';

export interface PortableCategory extends Category {
  portables: Portable;
}
