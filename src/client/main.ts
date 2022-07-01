import { createApp } from "vue";
import  App from './App.vue'
import {createPureUI} from "../index";
import '../style/index.css'
const app = createApp(App)
app.use(createPureUI())
app.mount('#app')
