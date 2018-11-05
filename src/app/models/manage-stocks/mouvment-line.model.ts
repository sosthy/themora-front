import {Mouvment} from './mouvment.model';
import {Product} from './product.model';

export class MouvmentLine {
  id: number;
  quantity: number;
  priceUnit: number;
  priceTotal: number;
  mouvement: Mouvment;
  product: Product;
  note: string;
}
