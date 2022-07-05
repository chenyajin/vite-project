<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:18:49
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-06-30 16:41:56
 * @Description: 
-->
<template>
  <h1>{{ props.msg }}</h1>
  <router-link to="/about">About</router-link>
  <el-button type="button" @click="count++">count is: {{ count }}</el-button>
</template>
<script setup lang="ts">

defineOptions({
  name: 'About'
})

const props = defineProps(['msg'])

const count = ref(0)

</script>
