<template>
  <div class="detailBottomBar">
    <div class="left">
      <div class="left_item1">
        <p></p>
        <p>客服</p>
      </div>
      <div class="left_item2">
        <p></p>
        <p>店铺</p>
      </div>
      <div class="left_item3">
        <p></p>
        <p>收藏</p>
      </div>
    </div>

    <div class="right">
      <div @click="cartClick">加入购物车</div>
      <div>购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      cartClick() {
        this.$emit('addCart')
      }
    }
  }
</script>

<style scoped>
  .detailBottomBar {
    width: 100vw;
    height: 50px;
    background-color: #fff;
    position: relative;
    bottom: 49px;
    box-shadow: 0 1px 1px 1px rgba(100, 100, 100, .5);
    display: flex;
  }


  .left {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 1.7;
    font-size: 14px;
    height: 100%;
  }

  .left div {
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }

  .left_item1 p:nth-child(1) {
    width: 22px;
    height: 25px;
    background: url('~assets/img/detail/detail_bottom.png');
    background-position: 0 -50px;
    background-size: 22px 150px;
  }

  .left_item2 p:nth-child(1) {
    width: 22px;
    height: 25px;
    background: url('~assets/img/detail/detail_bottom.png');
    background-position: 0 -95px;
    background-size: 22px 150px;
  }

  .left_item3 p:nth-child(1) {
    width: 22px;
    height: 25px;
    background: url('~assets/img/detail/detail_bottom.png');
    background-position: 0 5px;
    background-size: 22px 150px;
  }

  .right {
    flex: 2;
    display: flex;
  }

  .right div {
    flex: 1;
    box-shadow: -1px 0 1px 1px rgba(100, 100, 100, .1);
  }

  .right div:nth-child(1) {
    text-align: center;
    line-height: 50px;
    background-color: #ffde0e;
    color: black;
  }

  .right div:nth-child(2) {
    text-align: center;
    line-height: 50px;
    background-color: #ff779a;
    color: #fff;
  }

  /*.left {*/
  /*  width: 25px;*/
  /*  height: 30px;*/
  /*  background: url('~assets/img/detail/detail_bottom.png');*/
  /*  background-position: 0 0px;*/
  /*  background-size: 27px 180px;*/
  /*}*/
</style>
