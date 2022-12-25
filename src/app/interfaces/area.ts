import {Thing} from './thing'

export interface Area {
  areaId: number,
  name: string,
  things: Array<Thing>
}
