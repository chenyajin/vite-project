<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:12:05
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-07 09:34:21
 * @Description: 
-->
<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <Buttons :msg="title" />
</template>
<script setup lang="ts">
import Buttons from '@/views/buttons/index'

defineOptions({
  name: 'Home'
}) 
const title = provide('title', 'Hello Vue 3 + TypeScript + Vite')
</script>
