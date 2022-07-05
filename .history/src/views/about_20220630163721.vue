<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 16:18:49
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-06-30 16:37:21
 * @Description: 
-->
<template>
  <h1>{{ props.msg }}</h1>

  <el-button type="button" @click="count++">count is: {{ count }}</el-button>
</template>
<script setup lang="ts">

defineOptions({
  name: 'About'
})

const props = defineProps(['msg'])

const count = ref(0)

</script>
