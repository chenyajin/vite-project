<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:18:49
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-06 16:13:24
 * @Description: 
-->
<template>
  <h1>{{ props.msg }}</h1>
  <router-link to="/todo">
    <el-button type="button">To Do List</el-button>
  </router-link>
  <el-button type="button" @click="count++">count is: {{ count }}</el-button>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
defineOptions({
  name: 'About'
})
type propsType = {
  msg: string
}
const props = defineProps<propsType>()

const count = ref(0)

</script>
