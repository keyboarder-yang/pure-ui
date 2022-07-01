<template>
  <button ref="DemoButton" class="demo-button inset-button">
    按钮本体
    <span class="demo-button__glitch"></span>
  </button>
</template>


<script setup lang="ts">
import './DemoButton.css'
import {ref} from 'vue';
const DemoButton = ref<HTMLButtonElement>();
const setProperty:DemoButtonFunc['setProperty'] = (key:DemoButtonProperty,value:any) => {
  DemoButton.value?.style.setProperty(key,value)
}
defineExpose({setProperty})
</script>


<style scoped>
.demo-button {
  --bg: var(--red);
  --glitch-text: 'hello';
}
</style>



<script lang="ts">
export default {name: 'YButton'}
</script>
