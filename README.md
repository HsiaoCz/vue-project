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

shims-vue.d.ts 主要是告诉 vue 属于这种类型，具体是哪种类型呢?
再说

安装 element-plus

```js
npm install element-plus --save
```

使用 Element-Plus 的两种方式

1、完整导入

```vue
import ElementPlus from 'element-plus' import 'element-plus/dist/index.css'
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

按需引入需要安装插件

```javascript
npm install -D unplugin-vue-components unplugin-auto-import
```

还需要进行配置,这里需要在 webpack.js 里面配置

```javascript
// webpack.config.js
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
};
```

因为这里没有 webpack，所以直接配置在 vue.config.js 里面

```javascript
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

module.exports = defineConfig({
  transpileDependencies: true
  configureWebpack:{
    plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  }
})
```

### 2、登录页面

1. 在view下面写一个页面 LoginView

这里使用输入vb 选择vue3 ts 可以快速创建一个模板

然后在router里面添加一个路由

```javascript
{
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  }
```