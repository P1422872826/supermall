<template>
  <div class="box">
    <div v-for="item in goods" class="goods-item" @click="itemClick(item.iid)">
      <img class="goods-img" :src="item.show.img" alt="">
      <div class="item-title">{{item.title}}</div>
      <span class="item-price">{{item.price}}</span>
      <span class="item-cfav">
        <img src="~assets/img/common/collect.svg" alt="">
        {{item.cfav}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      itemClick(iid) {
        this.$router.push({
          path: '/detail',
          query: {
            iid
          }
        })
      }
    }
  }
</script>

<style scoped>
  .box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 5px;
  }

  .goods-item {
    width: 48vw;
    padding: 5px 0;
  }

  .goods-item .goods-img {
    width: 100%;
    border-radius: 5px;
  }

  .item-title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 16px;
    font-size: 14px;
    text-align: center;
    margin-left: 3px;
  }

  .item-price,
  .item-cfav {
    text-align: center;
    font-size: 15px;
  }

  .item-price {
    margin-left: 25%;
    color: var(--color-high-text);
  }

  .item-cfav img {
    margin-left: 5px;
    width: 15px;
  }
</style>
