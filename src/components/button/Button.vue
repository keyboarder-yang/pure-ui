<template>
  <div ref="ButtonDom" class="button">
    <slot></slot>
  </div>
</template>


<script setup lang="ts">
import {ref} from 'vue'
const ButtonDom = ref<HTMLButtonElement>();
const setProperty:ButtonFunc['setProperty'] = (key:ButtonProperty,value:any) => {
  ButtonDom.value?.style.setProperty(key,value)
}
defineExpose({setProperty})
</script>


<style scoped>
@import "Button.css";
</style>



<script lang="ts">
export default {name: 's-button'}
</script>
