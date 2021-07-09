<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style scoped>
#tab-bar {
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 49px;
  background-color: #eee;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -1px 1px rgb(100, 100, 100, 0.2);
}
</style>
