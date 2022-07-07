
<!--
 * @Author: ChenYaJin
 * @Date: 2022-07-07 09:28:45
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-07 09:46:35
 * @Description: 
-->
<template>
  <el-input v-model="title"></el-input>
  {{title}}11
</template>
<script lang="ts" setup>
import { Ref } from "vue"

defineOptions({
  name: 'InjectPage'
})

inject('title', ref('我是C默认值'))

</script>