<template>
 <div>
   <renderDom title="Hello Tsx" @on-click-animal="onClickAnimal"/>
 </div>
</template>

<script setup lang="ts">
import renderDom from './test'

defineOptions({
  name: 'Tsx'
})

const onClickAnimal = (animal: string) => {
  console.log('您点击了：', animal)
}
</script>

<style lang="less" scoped>
.tsx-wrapper {
  width: 250px;
  margin: 0 auto;
  text-align: left;
}
 
</style>
