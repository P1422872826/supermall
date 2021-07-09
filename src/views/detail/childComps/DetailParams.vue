<template>
  <div>
    <table class="table1" cellspacing="0">
      <tr v-for="(i, index) in params.rule.tables[0]">
        <td v-for="item in params.rule.tables[0][index]"> {{item}}</td>
      </tr>
    </table>

    <table class="table2" cellspacing="0">
      <tr v-for="item in params.info.set">
        <td>{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props: {
      params: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .table1 {
    width: 100vw;
    border-top: 5px solid #eee;
    padding: 30px 10px 0;

  }

  .table1 tr td {
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
  }

  .table2 {
    width: 100vw;
    padding: 0 10px 30px;
    border-bottom: 5px solid #eee;
  }

  .table2 tr {
    display: flex;
    border-bottom: 1px solid #ccc;
  }

  .table2 tr td {
    display: block;
    padding: 15px 0;
  }

  .table2 tr td:first-child {
    margin-right: 70px;
  }

  .table2 tr td:last-child {
    width: 250px;
  }

  .value {
    color: var(--color-high-text);
  }
</style>
