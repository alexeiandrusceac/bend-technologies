import { Thing } from './thing';
import { Observable } from 'rxjs';

export interface Area {
  areaId: number;
  name: string;
  things: Array<Thing>;
  thingsOb: Observable<Thing[]>;
}
