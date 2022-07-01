<template>
  <button ref="Button" class="button inset-button">
    按钮本体
    <span class="button__glitch"></span>
  </button>
</template>


<script setup lang="ts">
import './Button.css'
import {ref} from 'vue';
const Button = ref<HTMLButtonElement>();
const setProperty:ButtonFunc['setProperty'] = (key:ButtonProperty,value:any) => {
  Button.value?.style.setProperty(key,value)
}
defineExpose({setProperty})
</script>


<style scoped>
.button {
  --bg: var(--red);
  --glitch-text: 'hello';
}
</style>



<script lang="ts">
export default {name: 's-button'}
</script>
