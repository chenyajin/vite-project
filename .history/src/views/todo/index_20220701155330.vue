<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 17:42:39
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-01 15:53:08
 * @Description: 
-->
<template>
  <div class="todo-wrapper">
    <el-input v-model="keyword" @keyup.enter="onAdd"></el-input>
    <div class="list-wrapper">
      <p v-for="item in list" :class="[item.complete ? 'complete-text' : '']">
         <el-icon v-if="item.complete" @click="onComplete(item, false)"><CircleCheckFilled/></el-icon>
        <el-icon v-else @click="onComplete(item, true)"><CircleCheck/></el-icon>
        <span :class="['content-width']">{{item.content}}</span>
        <el-icon class="cursor-pointer" @click="onDelete(item)">
          <Delete />
        </el-icon>
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ITodoItem } from "@/model/todo"
import { todoStoreWidthOut } from "@/store/modules/todo"

const keyword = ref<string>('')
const todoStore = todoStoreWidthOut()
const list = todoStore.getList

const onAdd = () => {
  if (!!keyword) {
    const item: ITodoItem = {
      code: new Date().getTime(),
      content: keyword.value,
      delete: false,
      complete: false
    }
    todoStore.addTodoItem(item)
    keyword.value = ''
  }
}
const onComplete = (item: ITodoItem, isComplete: boolean) => {
  todoStore.completeTodoItem(item, isComplete)
}

const onDelete = (item: ITodoItem) => {
  todoStore.deleteTodoItem(item)
}
</script>
<style lang="less" scoped>
.todo-wrapper {
  width: 400px;
  margin: 0 auto;
}
.list-wrapper {
  margin-top: 20px;
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    margin: 0;
    border-bottom: 1px solid #dcdfe6;
    .content-width {
      flex: 1;
      text-align: left;
      padding: 0 5px;
    }
    &:hover {
      background-color: #f2f6fc;
    }
    &.complete-text {
      opacity: 0.5;
      text-decoration: line-through;
    }
  }
}
</style>