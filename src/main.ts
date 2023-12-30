import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
// 来个本地化和国际化
import 'element-plus/dist/index.css'
createApp(App).use(router).use(ElementPlus).mount('#app')
