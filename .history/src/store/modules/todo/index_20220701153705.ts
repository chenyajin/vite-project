/*
 * @Author: ChenYaJin
 * @Date: 2022-07-01 10:27:01
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-01 15:37:05
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
  getters: {
    getList(): ITodoItem[] { 
      return this.list
    }
  },
  actions: {
    addTodoItem(item: ITodoItem) { 
      this.list.unshift(item)
    },
    completeTodoItem(item: ITodoItem) { 
      const index = this.list.indexOf(item)
      this.list[index].complete = true
    },
    deleteTodoItem(item: ITodoItem) {
      const index = this.list.indexOf(item)
      this.list.splice(index, 1)
    }
  }
})


// Need to be used outside the setup
export function todoStoreWidthOut() {
  return todoStore(store);
}