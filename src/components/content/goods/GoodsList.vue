<template>
  <div id="goods-list">
    <goods-item :goods="goods"></goods-item>
  </div>
</template>

<script>
  import GoodsItem from "./GoodsItem";

  export default {
    name: "GoodsList",
    components: {
      GoodsItem
    },
    props: {
      goods: Array,
      default() {
        return []
      }
    }
  }
</script>

<style scoped>

</style>
