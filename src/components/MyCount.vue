<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" @click="item.goods_count--">
      -
    </button>
    <input type="number" class="form-control inp" v-model="item.goods_count" />
    <button type="button" class="btn btn-light" @click="item.goods_count++">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },
  watch: {
    item: {
      deep: true,
      immediate: true,
      handler(newValue) {
        if (newValue.goods_count < 0) {
          this.item.goods_count = 0
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>
