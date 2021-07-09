<template>
  <div id="home" ref="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物车</div>
    </nav-bar>

    <tab-control :titles="['流行', '新款', '精选']"
                 @taClick="ta1Click"
                 ref="tabcontrol1"
                 class="tabcontrol"
                 v-show="backTopActive"
    />

    <b-scroll class="content"
              ref="bscroll"
              @getScrollY="getScrollY"
              :probe-type="3"
              @getPullUp="getPullUp"
    >
      <home-swiper :banner="banner"/>

      <home-recommend :recommend="recommend"/>

      <home-feature/>

      <tab-control :titles="['流行', '新款', '精选']"
                   @taClick="ta1Click"
                   ref="tabcontrol2"
      />

      <goods-list :goods="goods[currentType].list" ref="goodlist"/>
    </b-scroll>

    <back-top class="backtop"
              @click.native="backTop"
              v-show="backTopActive"
    />

  </div>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommend from "./childComps/HomeRecommend";
  import HomeFeature from "./childComps/HomeFeature";

  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import BScroll from 'components/common/bScroll/BScroll'
  import BackTop from "components/content/backTop/BackTop";

  import {getHomeGodds, getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TabControl,
      GoodsList,
      BScroll,
      BackTop
    },
    data() {
      return {
        // 存储轮播图 图片
        banner: [],
        // 存储feature图
        recommend: [],
        // 存储goods
        goods: {
          pop: {page: 0, list: []},
          new: {page: 0, list: []},
          sell: {page: 0, list: []},
        },
        currentType: 'pop',
        backTopActive: false,
        saveY: 0,
        //  记录 pop new sell 的Y值
        popY: 0,
        newY: 0,
        sellY: 0
      }
    },
    created() {
      // 请求轮播图 和 推荐的图片
      this.getHomeMultidata()

      // 请求 精选 新款 流行的数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    activated() {
      this.$refs.bscroll.BScroll.scrollTo(0, this.saveY, 0)
      this.$refs.bscroll.BScroll.refresh()
    },

    deactivated() {
      this.saveY = this.$refs.bscroll.BScroll.y
    },

    methods: {
      /**
       *  事件监听相关
       */

      ta1Click(index) {
        // 如果在tabcontrol上面就给他原始值 因为如果滚动tabcontrol下面还给原始值的话又会回到tabcontrol位置所以要给判断
        if (this.popY >= -this.$refs.tabcontrol2.$el.offsetTop + 40) {
          this.popY = -this.$refs.tabcontrol2.$el.offsetTop - 40
        }
        if (this.newY >= -this.$refs.tabcontrol2.$el.offsetTop + 40) {
          this.newY = -this.$refs.tabcontrol2.$el.offsetTop - 40
        }
        if (this.sellY >= -this.$refs.tabcontrol2.$el.offsetTop + 40) {
          this.sellY = -this.$refs.tabcontrol2.$el.offsetTop - 40
        }


        switch (index) {
          case 0:
            this.currentType = 'pop'
            // 要到tabcontrol才能点击跳转
            if (this.backTopActive && this.popY <= -this.$refs.tabcontrol2.$el.offsetTop + 40) { //
              this.$refs.bscroll.BScroll.scrollTo(0, this.popY, 0)
            }
            break;
          case 1:
            this.currentType = 'new'
            if (this.backTopActive && this.newY <= -this.$refs.tabcontrol2.$el.offsetTop + 40) {
              this.$refs.bscroll.BScroll.scrollTo(0, this.newY, 0)
            }
            break;
          case 2:
            this.currentType = 'sell'
            if (this.backTopActive && this.sellY <= -this.$refs.tabcontrol2.$el.offsetTop + 40) {
              this.$refs.bscroll.BScroll.scrollTo(0, this.sellY, 0)
            }
            break;
        }
        this.$refs.tabcontrol1.currentIndex = this.$refs.tabcontrol2.currentIndex = index

      },
      getPullUp() {
        this.getHomeGoods(this.currentType)
        this.$refs.bscroll.BScroll.finishPullUp()
        this.$refs.bscroll.BScroll.refresh()
      },

      backTop() {
        this.$refs.bscroll.BScroll.scrollTo(0, 0, 300)
      },

      /**
       *  处理 tabcontrol 滚动固定
       */
      getScrollY(position) {

        -this.$refs.tabcontrol2.$el.offsetTop >= position + 40 ? this.backTopActive = true : this.backTopActive = false
        // 记录当被选中的类型的Y
        switch (this.currentType) {
          case "pop":
            this.popY = position
            break;
          case "new":
            this.newY = position
            break;
          case "sell":
            this.sellY = position
        }
      },


      /**
       *  网络请求相关
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list

        })
      },

      getHomeGoods(type) {
        // 因为一开始是 0 所以要+1
        let page = this.goods[type].page + 1
        getHomeGodds(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          // 把原来的page加一
          this.goods[type].page += 1
        })
      }


    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }

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


  .content {
    height: calc(100% - 49px - 40px);
    position: absolute;
    top: 40px;

  }

  .backtop {
    position: fixed;
    bottom: 80px;
    right: 10px;

  }

  .tabcontrol {
    position: relative;
    top: 40px;
    z-index: 999;
  }


</style>
