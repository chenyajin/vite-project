<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:12:05
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-07 14:37:05
 * @Description: 
-->
<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <Buttons msg="Hello Vue 3 + TypeScript + Vite" />
  {{ msg }}
</template>
<script setup lang="ts">
import Buttons from '@/views/buttons/index'

defineOptions({
  name: 'Home',
})
const msg = ref<string>('provide content')
let info = reactive({ user: 'John Doe' })
provide('user', info.user)
</script>
