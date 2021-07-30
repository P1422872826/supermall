<template>
  <div>
    <div :class="isChecked ? 'checked' : 'dechecked'"></div>
  </div>
</template>

<script>
export default {
  name: "Check",
  props: {
    isChecked: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.checked {
  width: 30px;
  height: 30px;
  background-color: pink;
  border-radius: 50%;
}

.dechecked {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
</style>