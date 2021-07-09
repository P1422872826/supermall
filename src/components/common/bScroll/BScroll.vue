<template>
  <div class="wrapper" ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "BScroll",
    data() {
      return {
        BScroll: null
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    mounted() {
      this.BScroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: {}
      })
      this.getBScrollXY()
      this.getPullingUpLoad()
      this.$store.state.bscroll = this.BScroll

    },
    methods: {
      getBScrollXY() {
        this.BScroll.on('scroll', (position) => {
          this.$emit('getScrollY', position.y)
        })
      },

      getPullingUpLoad() {
        this.BScroll.on('pullingUp', () => {
          this.$emit('getPullUp')
        })
      }
    }
  }
</script>

<style scoped>

</style>
