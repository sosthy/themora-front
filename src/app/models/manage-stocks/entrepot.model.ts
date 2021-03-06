import {Emplacement} from './emplacement.model';
import {Mouvment} from './mouvment.model';

export class Entrepot {
  id: number;
  name: string;
  nbOfProduct: number;
  priceTotal: number;
  volume: number;
  volumeSecurity: number;
  mouvements: Mouvment;
  emplacements: Emplacement;
}
