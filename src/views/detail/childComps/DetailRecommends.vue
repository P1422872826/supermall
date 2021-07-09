<template>
  <div class="RecommendsBox">
    <div v-for="item in recommends">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
      <div class="foot">
        <span>{{item.price}}</span>
        <span>☆</span>
        <span>{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailRecommends",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .RecommendsBox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 10px;
  }

  .RecommendsBox div {
    width: 48vw;
    margin-bottom: 5px;
  }

  .RecommendsBox p {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 0 5px;
  }

  .RecommendsBox div img {
    width: 100%;
    border-radius: 5px;
  }

  .foot {
    display: flex;
    justify-content: center;
  }

  .foot span:first-child {
    color: var(--color-high-text);
  }

  .foot span:nth-child(2) {
    margin: 0 5px;
  }
</style>
