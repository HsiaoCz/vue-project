# nobody

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 1、 介绍

shims-vue.d.ts 主要是告诉vue属于这种类型，具体是哪种类型呢?
再说

安装element-plus

```js
npm install element-plus --save
```

使用Element-Plus的两种方式

1、完整导入
```vue
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)
```

在项目中的样子

```vue.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
createApp(App).use(router).use(ElementPlus).mount('#app')
```

这种导入方式有一个弊端，就是打包的时候包会很大


还可以导入本地化和国际化

```vue.js
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
app.use(ElementPlus, {
  locale: zhCn,
})
```

这里假设这行报错

```vue.js
createApp(App).use(router).use(ElementPlus).mount('#app')

可以改成这样

const app:any=createApp(App)
app.use(router).use(ElementPlus).mount('#app')
```

2、按需导入