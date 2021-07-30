<template>
  <div>
    <nav-bar>
      <div slot="center" class="cartNavBar">
        购物车
        <span v-show="cartListLength">
          ({{cartListLength}})
        </span>
      </div>
    </nav-bar>

    <cart-goods-item/>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import CartGoodsItem from "./childComps/CartGoodsItem";
  // 利用vuex自带的mapgetters将store的getters映射到组件的计算属性里
  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
      CartGoodsItem
    },
    computed: {
      ...mapGetters([
        'cartListLength'
      ])
    }
  }
</script>

<style scoped>
  .cartNavBar {
    background-color: #ff8198;
    height: 40px;
    width: 100vw;
    color: #fff;
    text-align: center;
    line-height: 40px;
  }
</style>
