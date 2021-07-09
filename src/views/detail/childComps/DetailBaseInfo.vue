<template>
  <div class="infoBox">
    <div class="title">{{goods.title}}</div>

    <div class="priceBox">
      <span class="price">{{goods.price}}</span>
      <span class="oldPrice"><del>{{goods.oldPrice}}</del></span>
      <span class="desc" v-if="goods.desc">{{goods.desc}}</span>
    </div>

    <div class="colBox">
      <p>{{goods.columns[0]}}</p>
      <p>{{goods.columns[1]}}</p>
      <p>{{goods.services[1].name}}</p>
    </div>

    <div class="serv">
      <p><img :src="goods.services[1].icon" alt="">
        {{goods.services[1].name}}</p>

      <p>
        <img :src="goods.services[2].icon" alt="">
        {{goods.services[2].name}}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .infoBox {
    padding: 10px 5px;
  }

  .title {
    font-size: 20px;
  }

  .priceBox {
    margin: 10px 0;
  }

  .priceBox span {
    margin-right: 10px;
  }

  .price {
    color: var(--color-high-text);
    font-size: 20px;
  }

  .desc {
    color: #fff;
    background-color: var(--color-high-text);
    padding: 5px;
    border-radius: 8px;
    font-size: 15px;
  }

  .oldPrice, .colBox {
    color: #a6a6a6;
  }

  .colBox {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #a6a6a6;
    padding-bottom: 10px;
  }

  .serv {
    display: flex;
    padding: 30px 0;
    justify-content: space-between;
    border-bottom: 5px solid #eee;
  }

  .serv p {
    display: flex;
  }

  .serv p img {
    width: 15px;
    height: 15px;
  }

</style>
