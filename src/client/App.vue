<template>
  <div class="container">
    <div class="content">
      <s-button ref="button">click</s-button>
    </div>
  </div>

</template>
<script setup lang="ts">
import {ref,onMounted} from 'vue'
const button  = ref<ButtonFunc>();
onMounted(() => {
  button?.value?.setProperty('--light-color','rgb(111,111,111)')
})
</script>

<style scoped>
.container{
  position: relative;
  height: 100vh;
}
.content{
  border-radius: 30px;
  width: 400px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(111,111,111);
  /*background: #fff;*/
}
</style>