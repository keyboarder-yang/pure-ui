<template>
  <y-button ref="ref1">click</y-button>
</template>
<script setup lang="ts">
import {ref,onMounted} from 'vue'
const ref1 = ref<DemoButtonFunc>()
onMounted(() => {
  // ref1.value?.setProperty('')
})

</script>
