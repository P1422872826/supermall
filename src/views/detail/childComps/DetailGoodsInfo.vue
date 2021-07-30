<template>
  <div>
    <div v-for="item in img.detailImage[0].list" class="showImg">
      <img :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      img: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        currentIndex: 0,
      }
    },
    methods: {
      imgLoad() {
        if (++this.currentIndex === this.img.detailImage[0].list.length) {
          this.$emit('imgLoad')
        }
      }
    }
  }
</script>

<style scoped>
  .showImg img {
    width: 100vw;
  }
</style>
