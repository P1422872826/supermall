<template>
  <div class="profile">
    <check
      v-for="item in cartList"
      :key="item.iid"
      :isChecked="item.checked"
      @click.native="checkClick(item)"
    />

    <div>{{ total }}</div>
  </div>
</template>

<script>
import Check from "./Check.vue";

export default {
  name: "Profile",
  components: {
    Check,
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
    total() {
      return this.cartList
        .filter((item) => item.checked)
        .reduce((p, s) => {
          return (p += s.price * s.count);
        }, 0);
    },
  },
  methods: {
    checkClick(item) {
      item.checked = !item.checked;
      console.log(item);
      console.log(this.cartList[0]);
    },
  },
};
</script>

<style scoped>
</style>
