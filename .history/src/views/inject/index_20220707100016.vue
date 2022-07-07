
<!--
 * @Author: ChenYaJin
 * @Date: 2022-07-07 09:28:45
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-07 09:59:46
 * @Description: 
-->
<template>
  My name is: {{user}}
</template>
<script lang="ts" setup>

defineOptions({
  name: 'InjectPage'
})

const user = inject('user')

</script>