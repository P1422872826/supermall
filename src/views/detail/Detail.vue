<template>
  <div class="detail">
    <detail-nav :jumpTop="jumpTop" :bscroll="bscroll"/>

    <b-scroll class="content" ref="detailScroll" @getScrollY="getScrollY">
      <detail-swiper :topImages="topImages"/>

      <detail-base-info :goods="goods"/>

      <detail-shop :shop="shop"/>

      <detail-goods-info :img="img" @imgLoad="imgLoad"/>

      <detail-params :params="params" ref="params"/>

      <detail-rate :rate="rate" ref="rate"/>

      <detail-recommends :recommends="recommends" ref="recommends"/>
    </b-scroll>

    <back-top class="backtop" v-show="flag" @click.native="backTop"/>
  </div>
</template>

<script>
  import DetailNav from "./childComps/DetailNav";
  import DetailSwiper from "./childComps/DetailSwiper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShop from "./childComps/DetailShop";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailParams from "./childComps/DetailParams";
  import DetailRate from "./childComps/DetailRate";
  import DetailRecommends from "./childComps/DetailRecommends";

  import BScroll from 'components/common/bScroll/BScroll'
  import BackTop from "components/content/backTop/BackTop";

  import {getDetail, getRecommend, Goods, Params, Shop} from 'network/detail'

  export default {
    name: "Detail",
    components: {
      DetailNav,
      DetailSwiper,
      DetailBaseInfo,
      DetailShop,
      BScroll,
      DetailGoodsInfo,
      BackTop,
      DetailParams,
      DetailRate,
      DetailRecommends
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        img: {},
        flag: false,
        params: {},
        rate: {},
        recommends: [],
        jumpTop: {
          params: 0,
          rate: 0,
          recommends: 0,
        },
        bscroll: {}
      }
    },
    created() {
      // 接收 item 传过来的 iid
      this.iid = this.$route.query.iid

      //  根据接收过来的 iid 来请求数据
      getDetail(this.iid).then(res => {
        const data = res.result
        this.topImages = data.itemInfo.topImages
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.img = data.detailInfo
        this.params = new Params(data.itemParams.info, data.itemParams.rule)

        if (data.rate.cRate !== 0) {
          this.rate = data.rate
        }
      })

      // 请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list
      })
    },
    mounted() {
      this.bscroll = this.$refs.detailScroll.BScroll
    },
    methods: {
      imgLoad() {
        this.$refs.detailScroll.BScroll.refresh()
        this.jumpTop.params = -this.$refs.params.$el.offsetTop
        this.jumpTop.rate = -this.$refs.rate.$el.offsetTop
        this.jumpTop.recommends = -this.$refs.recommends.$el.offsetTop
      },
      getScrollY(position) {
        position < -1000 ? this.flag = true : this.flag = false
      },
      backTop() {
        this.$refs.detailScroll.BScroll.refresh()
        this.$refs.detailScroll.BScroll.scrollTo(0, 0, 300)
      }

    }
  }
</script>

<style scoped>


  .detail {
    height: 100vh;
    position: relative;
    background-color: #fff;
    z-index: 50;
  }

  .content {
    height: calc(100% - 40px);
  }

  .backtop {
    position: fixed;
    bottom: 80px;
    right: 10px;

  }
</style>
