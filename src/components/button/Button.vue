<template>
  <button ref="ButtonDom" class="button" :class="[type ? 'button--' + type : '']">
    <slot></slot>
  </button>
</template>


<script setup lang="ts">
// 引入样式
import "./Button.css";
// 引入内置方法
import { ref} from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})
// 获取当前按钮的DOM元素
const ButtonDom = ref<HTMLButtonElement>();
// 设置按钮的style属性
const setProperty:ButtonFunc['setProperty'] = (key:ButtonProperty,value:any) => {
  ButtonDom.value?.style.setProperty(key,value)
}
// 将设置属性的方法暴露出去
defineExpose({setProperty})
</script>

<script lang="ts">
export default {name: 's-button'}
</script>
