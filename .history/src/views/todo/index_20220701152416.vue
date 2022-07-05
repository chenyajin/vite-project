<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 17:42:39
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-01 15:23:24
 * @Description: 
-->
<template>
  <div class="todo-wrapper">
    <el-input v-model="keyword" @keyup.enter="handler"></el-input>
    <div class="list-wrapper">
      <p v-for="item in list">
        <span>{{item.content}}</span>
        <el-icon>
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

const handler = () => {
  if (!!keyword) {
    const item: ITodoItem = {
      code: new Date().getTime(),
      content: keyword.value,
      delete: false
    }
    todoStore.addTodoItem(item)
    keyword.value = ''
  }
}
</script>
<style lang="less" scoped>
.todo-wrapper {
  width: 400px;
  margin: 0 auto;
}
.list-wrapper {
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    border-bottom: 1px solid #f5f5f5;
  }
}
</style>