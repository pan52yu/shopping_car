<template>
  <div id="app">
    <MyHeader></MyHeader>
    <MyGoods></MyGoods>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyGoods from './components/MyGoods'
import MyFooter from './components/MyFooter'
export default {
  name: 'App',
  components: { MyHeader, MyGoods, MyFooter }
}
</script>

<style lang="less">
#app {
  padding: 50px 0;
}
</style>
