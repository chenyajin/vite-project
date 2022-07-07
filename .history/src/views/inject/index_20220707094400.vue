
<!--
 * @Author: ChenYaJin
 * @Date: 2022-07-07 09:28:45
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-07 09:43:59
 * @Description: 
-->
<template>
  <el-input v-model="title" @keyup.enter="onChange"></el-input>
  {{title}}11
</template>
<script lang="ts" setup>
import { Ref } from "vue"

defineOptions({
  name: 'InjectPage'
})

const title = inject('title', ref('我是C默认值'))

const onChange = () => {
  title.value = title.value
}
</script>