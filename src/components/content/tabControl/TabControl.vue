<template>
  <div id="tab-control">
    <ul class="tab-item">
      <li v-for="(item, index) in titles"
          :class="{active: currentIndex === index}"
          @click="tabClick(index)">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      tabClick(index) {
        this.currentIndex = index
        this.$emit('taClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-item {
    display: flex;
    justify-content: space-around;
    padding: 5px 0;
    background-color: #fff;
  }

  .tab-item li {
    list-style: none;
    padding: 3px;
  }

  .active {
    border-bottom: 3px solid var(--color-high-text);
    color: var(--color-high-text);
  }
</style>
