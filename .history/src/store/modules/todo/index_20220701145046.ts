/*
 * @Author: ChenYaJin
 * @Date: 2022-07-01 10:27:01
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-01 14:50:46
 * @Description: 
 */
import { ITodoItem } from "@/model/todo";


export interface ITodoStore {
  list: ITodoItem[]
}