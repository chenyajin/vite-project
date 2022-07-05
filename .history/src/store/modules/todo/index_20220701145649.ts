/*
 * @Author: ChenYaJin
 * @Date: 2022-07-01 10:27:01
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-01 14:56:49
 * @Description: 
 */
import { ITodoItem } from "@/model/todo";
import { store } from '@/store';
import { defineStore } from "pinia";


export interface ITodoStore {
  list: ITodoItem[]
}

export const todoStore = defineStore({
  id: 'todo',
  state: (): ITodoStore => {
    return {
      list: []
    }
  },
  getters: {},
  actions: {
    addTodoItem(item: ITodoItem) { 
      this.list.unshitf(item)
    }
  }
})


// Need to be used outside the setup
export function todoStoreWidthOut() {
  return todoStore(store);
}