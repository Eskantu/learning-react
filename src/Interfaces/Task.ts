import { ItemId } from '../Types/IItemId';
export interface Task {
  id: ItemId
  timespan: number
  task:string
}