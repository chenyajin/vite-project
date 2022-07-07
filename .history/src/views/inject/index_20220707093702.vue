
<!--
 * @Author: ChenYaJin
 * @Date: 2022-07-07 09:28:45
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-07 09:37:02
 * @Description: 
-->
<template>
  <el-input v-model="title"></el-input>
</template>
<script lang="ts" setup>
import { Ref } from "vue"

defineOptions({
  name: 'InjectPage'
})

const title = inject<Ref<string>>('title')
</script>