<template>
  <div>
    <div v-for="item in $store.state.cartList" class="cartGoodsItem">
      <div class="item_img"><img :src="item.img" alt=""></div>
      <div class="item_right">
        <div>{{item.title}}</div>
        <div>{{item.desc}}</div>
        <div>
          <p>{{item.price}}</p>
          <p>X{{item.count}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartGoodsItem"
  }
</script>

<style scoped>
  .cartGoodsItem {
    display: flex;
  }

  .item_img {
    width: 90px;
    height: 110px;
  }

  .item_img img {
    width: 100%;
    border-radius: 5px;
  }

  .item_right {
    display: flex;
  }
</style>
