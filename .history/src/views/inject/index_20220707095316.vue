
<!--
 * @Author: ChenYaJin
 * @Date: 2022-07-07 09:28:45
 * @LastEditors: ChenYaJin
 * @LastEditTime: 2022-07-07 09:53:16
 * @Description: 
-->
<template>
  inject content: {{title}}
</template>
<script lang="ts" setup>
import { Ref } from "vue"

defineOptions({
  name: 'InjectPage'
})

const title = inject('title')

</script>