<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:12:05
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-01 11:43:36
 * @Description: 
-->
<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <Buttons msg="Hello Vue 3 + TypeScript + Vite" />
</template>
<script setup lang="ts">
import Buttons from '@/views/buttons/index'

defineOptions({
  name: 'Home'
})

</script>
