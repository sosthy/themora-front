import {Entrepot} from './entrepot.model';
import {Product} from './product.model';

export interface Emplacement {
  id: number;
  name: string;
  entrepot: Entrepot;
  products: Product;
}
