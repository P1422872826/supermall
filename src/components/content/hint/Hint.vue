<template>
  <div class="hint">
    已添加到购物车
  </div>
</template>

<script>
  export default {
    name: "Hint"
  }
</script>

<style scoped>
  .hint {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 120px;
    height: 70px;
    background-color: rgba(100, 100, 100, .6);
    text-align: center;
    line-height: 70px;
    border-radius: 10px;
    color: #fff;

  }
</style>
