<template>
  <h1>{{ msg }}</h1>

  <el-button type="button" @click="count++">count is: {{ count }}</el-button>
</template>
<script setup lang="ts">

defineProps<{ msg: string }>()

const count = ref(0)

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
