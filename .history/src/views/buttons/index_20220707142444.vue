<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:18:49
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-07 11:37:54
 * @Description: 
-->
<template>
  <h1>{{ props.msg }}</h1>
  <h4>My name is: {{ user }}</h4>
  <el-button type="button" @click="onToPage('todo')">To Do List Demo</el-button>
  <el-button type="button" @click="onToPage('tsx')">Tsx Practice</el-button>
  <el-button type="button" @click="onToPage('inject')">Inject</el-button>
  <el-button type="button" @click="count++">count is: {{ count }}</el-button>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

defineOptions({
  name: 'Buttons',
})
type propsType = {
  msg: string
}
const router = useRouter()
const props = defineProps<propsType>()
const count = ref(0)
const onToPage = (name: string) => {
  router.push({
    name: name,
  })
}
const user = inject('user')
</script>
