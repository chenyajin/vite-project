<!--
 * @Author: ChenYaJin
 * @Date: 2022-06-30 17:42:39
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-06-30 17:58:57
 * @Description: 
-->
<template>
  <div>
    <el-input v-model="keyword" @keyup.enter="handler"></el-input>
  </div>
</template>
<script lang="ts" setup>

const keyword = ref<string>('')

const handler = () => {
  
}

</script>