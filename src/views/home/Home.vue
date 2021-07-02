<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>

    <home-swiper :banner="banner"/>

    <home-recommend :recommend="recommend"/>
  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";

  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend
    },
    data() {
      return {
        // 存储轮播图 图片
        banner: [],
        recommend: []

      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
        console.log(res.data)
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    display: flex;
    text-align: center;
    line-height: 40px;
    position: fixed;
    top: 0px;
    z-index: 999;
  }

</style>
