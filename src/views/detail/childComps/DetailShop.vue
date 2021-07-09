<template>
  <div class="shopBox">
    <div class="head">
      <img :src="shop.shopLogo" alt="">
      <p>{{shop.shopName}}</p>
    </div>

    <div class="body">
      <div class="left">
        <div class="left-sells">
          <p>{{getSells}}{{shop.sells >= 10000 ? '万' : ''}}</p>
          <p>总销量</p>
        </div>
        <div class="left-goods">
          <p>{{shop.goods}}</p>
          <p>全部宝贝</p>
        </div>
      </div>

      <div class="right">
        <div v-for="item in shop.score">
          <p>{{item.name}} </p>
          <p :style="{color : item.isBetter ? 'red' : 'green'}">{{item.score}} </p>
          <span
            :class="item.isBetter ? 'red' : 'green'">
          {{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>

    <div class="foot">进店逛逛</div>

  </div>
</template>

<script>
  export default {
    name: "DetailShop",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    },
  

    computed: {
      getSells() {
        let a = this.shop.sells + ""
        return a >= 10000 ? a.slice(0, 1) + ',' + a.slice(1, 2) : a
      }
    }
  }
</script>

<style scoped>
  .shopBox {
    position: relative;
  }

  .red {
    background-color: red;
    color: white;
  }

  .green {
    background-color: green;
    color: white;
  }

  .head {
    display: flex;
    align-items: center;
    padding: 10px 10px 0px;
  }

  .head img {
    border: 1px solid #ccc;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  .head p {
    font-size: 20px;
  }

  .body {
    display: flex;
    margin-top: 30px;
    margin-bottom: 100px;
  }

  .left {
    display: flex;
    font-size: 18px;
    align-items: center;
  }

  .left::after {
    content: '';
    display: block;
    width: 1px;
    height: 50px;
    background-color: #ccc;
    margin-left: 25px;
  }

  .left .left-sells, .left-goods {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-left: 25px;
  }

  .left-sells p:nth-child(1), .left-goods p:nth-child(1) {
    margin-bottom: 8px;
  }


  .right {
    width: 130px;
    margin-left: 25px;
    font-size: 16px;
    height: 80px;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  .right div {
    display: flex;
    justify-content: space-between
  }


  .foot {
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #f2f5fb;
    display: inline;
    padding: 10px 50px;
    border-radius: 10px;
  }


</style>
