<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 17:42:39
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-01 15:07:09
 * @Description: 
-->
<template>
  <div>
    <el-input v-model="keyword" @keyup.enter="handler"></el-input>
    <div>
      <p v-for="item in list">
        <span>{{item.content}}</span>
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