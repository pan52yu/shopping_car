<template>
  <div id="app">
    <MyHeader title="购物车" background="hotpink" color="black"></MyHeader>
    <MyGoods
      v-for="item in goodsList"
      :key="item.goods_id"
      :item="item"
    ></MyGoods>
    <MyFooter :goodsList="goodsList"></MyFooter>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyGoods from './components/MyGoods'
import MyFooter from './components/MyFooter'
import axios from 'axios'
export default {
  name: 'App',
  components: { MyHeader, MyGoods, MyFooter },
  data() {
    return {
      goodsList: []
    }
  },
  created() {
    this.getGoods()
  },
  methods: {
    async getGoods() {
      const res = await axios({
        url: '/api/cart'
      })
      this.goodsList = res.data.list
    }
  }
}
</script>

<style lang="less">
#app {
  padding: 50px 0;
}
</style>
