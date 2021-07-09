<template>
  <nav-bar class="detailNav">
    <div slot="left"
         class="back"
         @click="backClick"
    >
      <img src="~assets/img/common/back.svg" alt="">
    </div>

    <div slot="center" class="center">
      <div
        v-for="(item, index) in titles"
        @click="navClick(index)"
        :class="{active: currentIndex === index}"
      >
        {{item}}
      </div>
    </div>

  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navBar/NavBar";

  export default {
    name: "DetailNav",
    components: {
      NavBar
    },
    props: {
      jumpTop: {
        type: Object,
        default() {
          return {}
        }
      },
      bscroll: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
      }
    },
    mounted() {
      setTimeout(() => {
        console.log(this.jumpTop)
        console.log(this.bscroll)
        this.bscroll.on('scroll', (position) => {
          if (-position.y >= -this.jumpTop.params) {
            this.currentIndex = 1
          } else {
            this.currentIndex = 0
          }
          if (-position.y >= -this.jumpTop.rate) {
            this.currentIndex = 2
          }
          if (-position.y >= -this.jumpTop.recommends) {
            this.currentIndex = 3
          }
        })
      }, 1000)
    },
    methods: {
      navClick(index) {
        this.currentIndex = index
        switch (index) {
          case 0:
            this.bscroll.scrollTo(0, 0, 300)
            break;
          case 1:
            this.bscroll.scrollTo(0, this.jumpTop.params, 300)
            break;
          case 2:
            this.bscroll.scrollTo(0, this.jumpTop.rate, 300)
            break;
          case 3:
            this.bscroll.scrollTo(0, this.jumpTop.recommends, 300)
        }

      },
      backClick() {
        this.$router.go(-1)
      },
    }
  }
</script>

<style scoped>
  .detailNav {
    position: relative;
    background-color: #fff;
    z-index: 999;
  }

  .center .active {
    color: var(--color-high-text);
  }

  .center {
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .back {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
