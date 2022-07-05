<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 17:42:39
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-01 15:01:24
 * @Description: 
-->
<template>
  <div>
    <el-input v-model="keyword" @keyup.enter="handler"></el-input>
  </div>
</template>
<script lang="ts" setup>
import { todoStoreWidthOut } from "@/store/modules/todo"


const keyword = ref<string>('')
const todoStore = todoStoreWidthOut()
const list = todoStore.getList

const handler = () => {
  
}

</script>