<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
defineOptions({
  name: 'App',
})
</script>

<style lang="less">
@import 'styles/index.less';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
