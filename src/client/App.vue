<template>
  <div class="container">
    <div class="content">
      <s-button ref="button" type="error" disabled>click</s-button>
    </div>
  </div>

</template>
<script setup lang="ts">
import {ref,onMounted} from 'vue'
const button  = ref<ButtonFunc>();
onMounted(() => {
  button?.value?.setProperty('--light-color','rgb(222,111,111)')
})
</script>

<style scoped>

</style>
