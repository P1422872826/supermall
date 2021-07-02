<template>
  <div id="homeRecommend">
    <div v-for="item in recommend" class="recItem">
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: {
      recommend: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  #homeRecommend {
    width: 100vw;
    height: 150px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: -3px;
    padding-top: 10px;
    background-color: #fff;
  }

  .recItem img {
    width: 22vw;
    margin-bottom: 5px;
    font-style: var(--font-size);
  }
</style>
