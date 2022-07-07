/*
 * @Author: ChenYaJin
 * @Date: 2022-07-01 10:27:01
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-07 14:43:26
 * @Description:
 */
import { ITodoItem } from '@/model/todo'
import { store } from '@/store'
import { defineStore } from 'pinia'

export interface ITodoStore {
  list: ITodoItem[]
}

export const todoStore = defineStore({
  // id 是必需的，类似 vuex 中为每个module设置namespaced，该id名称会显示在vue devtools中
  id: 'todo',
  state: (): ITodoStore => {
    return {
      list: [],
    }
  },
  getters: {
    getList(): ITodoItem[] {
      return this.list
    },
    listLength: (state) => state.list.length,
  },
  actions: {
    addTodoItem(item: ITodoItem) {
      this.list.unshift(item)
    },
    completeTodoItem(item: ITodoItem, isComplete: boolean) {
      const index = this.list.indexOf(item)
      this.list[index].complete = isComplete
    },
    deleteTodoItem(item: ITodoItem) {
      const index = this.list.indexOf(item)
      this.list.splice(index, 1)
    },
  },
})

// Need to be used outside the setup
export function todoStoreWidthOut() {
  return todoStore(store)
}
