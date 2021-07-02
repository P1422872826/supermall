<template>
  <div id="tab-barr" @click="itemClick">
    <div class="tab-bar-item">
      <div v-if="!isShow"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <div :style="isActiveColor"><slot name="item-text"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",

  props: {
    path: String,
    isActive: {
      type: String,
      default: "red",
    },
  },
  methods: {
    itemClick() {
      if (this.path != this.$route.path) {
        this.$router.push(this.path);
      }
    },
  },
  computed: {
    isActiveColor() {
      return this.isShow ? { color: this.isActive } : {};
    },
    isShow() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
  },
};
</script>

<style scoped>
#tab-barr {
  display: flex;
  justify-content: space-around;
}
.tab-bar-item {
  margin-top: 3px;
  height: 45px;
  font-size: 14px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
}

.tab-bar-item img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
</style>