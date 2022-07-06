<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:18:49
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-06 16:38:33
 * @Description: 
-->
<template>
  <h1>{{ props.msg }}</h1>
  <router-link to="/todo">
    <el-button type="button">To Do List Demo</el-button>
  </router-link>
   <el-button type="button" @click="onToTsx">Txs practice</el-button>
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
const onToTsx = () => {
  router.push({
    name: 'tsx'
  })
}
</script>
