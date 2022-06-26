# shopping_cart

## Project setup

```bash
yarn
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Lints and fixes files

```bash
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 业务逻辑

### 项目初始化

> 按照需求拆分组件，在 components 中创建，在 App 中引入注册使用

> 下载 bootstrap 并引入

```bash
yarn add bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
```

> MyGoods 中的按钮单独封装标签 并在 MyGoods 中引入注册

### 头部自定义

在头部标签中单独设置 title 、 背景色 、 颜色等可能不一样的属性
在<MyHeader></MyHeader>中用 props 接受使用

> 注意：从现在开始，props 要用对象形式写
> type:String, // 类型 required:true, // 必要性 default:'默认值' // 默认值

### 请求数据

下载 axios

```bash
yarn add axios
```

在 main.js 中引入并设置 baseURL

```js
import axios from 'axios'
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net'
axios.defaults.timeout = 5000
```

```vue
在App中声明一个数组 goodsList:[] 
在methods 中 写个函数 请求 axios 用 async await 并将返回值赋值给goodsLIst 
在created 中调用 axios 函数
```

### 数据渲染
v-for 循环 请求过来的数据goodsList
> 循环时，把每一项 item 传给 MyGoods 组件，在组件中渲染数据

> label 和 复选框数据需要处理 id\for 动态绑定 每一项的 goods_id 就不会出现问题了

> 注意：MyCount 要单独封装成一个函数 MyGoods 作为父组件

### 结算数量控制、合计

> 把goodsList 传给 MyFooter
> MyFooter 使用计算属性 求和 AllCount \ AllPrice

### 全选反选
使用computed计算使用的全选模式
```js
isAll: {
  get() {
    return this..every((item) => item.状态)
  },
  set(val) {
    this..forEach((item) => (item.状态 = val))
  }
}
```
