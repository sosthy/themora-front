import {Portable} from './portable.model';

export interface PortableItem {
  id: number;
  codeQrc: string;
  codeBar: string;
  serial: string;
  reference: string;
 portable: Portable;
}
