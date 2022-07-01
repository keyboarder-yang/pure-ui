import { createApp } from "vue";
import  App from './App.vue'
import {createDemoUI} from "../index";
const app = createApp(App)
app.use(createDemoUI())
app.mount('#app')