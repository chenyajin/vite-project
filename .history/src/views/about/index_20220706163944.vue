<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:18:49
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-06 16:39:44
 * @Description: 
-->
<template>
  <h1>{{ props.msg }}</h1>
  <router-link to="/todo">
   
  </router-link>
   <el-button type="button" @click="onToPage('todo')">To Do List Demo</el-button>
   <el-button type="button" @click="onToPage('tsx')">Txs practice</el-button>
  <el-button type="button" @click="count++">count is: {{ count }}</el-button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { defineProps } from 'vue'
defineOptions({
  name: 'About'
})
type propsType = {
  msg: string
}
const router = useRouter()
const props = defineProps<propsType>()
const count = ref(0)
const onToPage = (name: string) => {
  router.push({
    name: name
  })
}
</script>
