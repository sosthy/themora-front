import {Portable} from './portable.model';
import {Mouvment} from './mouvment.model';
import {RecipientGroupe} from './recipient-groupe.model';

export class  Recipient {
  id: number;
  name: string;
  surname: string;
  portable: Portable;
  website: string;
  sex: string;
  cni: string;
  phone: string;
  photo: string;
  birthday: Date;
  civility: string;
 enterprise: string;
 service: string;
 fonction: string;
 groupe: RecipientGroupe;
 mouvements: Mouvment;
}
