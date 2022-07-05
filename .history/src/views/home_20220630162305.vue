<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:12:05
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-06-30 16:23:05
 * @Description: 
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <About msg="Hello Vue 3 + TypeScript + Vite" />
</template>
<script setup lang="ts">
import About from '@/views/about.vue'

defineOptions({
  name: 'Home'
})

</script>

<style scoped lang="less">
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
  a {
    color: #42b983;
  }
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
