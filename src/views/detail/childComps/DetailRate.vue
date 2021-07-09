<template>
  <div class="rateBox">
    <div class="rateHead">
      <p>用户评价</p>
      <span>更多</span>
    </div>

    <div class="rateBody">
      <div class="rateBodyItem1">
        <img :src="rate.list[0].user.avatar" alt="">
        <p>{{rate.list[0].user.uname}}</p>
      </div>

      <p class="rateBodyItem2">{{rate.list[0].content}}</p>

      <p class="rateBodyItem3">{{getDate}} <span>{{rate.list[0].style}}</span></p>

      <div class="rateBodyItem4">
        <div v-for="item in rate.list[0].images"><img :src="item" alt=""></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailRate",
    props: {
      rate: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      getDate() {
        var date = new Date(parseInt(this.rate.list[0].created) * 1000)
        var mouth = date.getMonth() * 1 + 1
        var day = date.getDate()
        mouth < 10 ? mouth = '0' + mouth : mouth
        day < 10 ? day = '0' + day : day
        return date.getFullYear() + '-' + mouth + '-' + day;
      }
    }
  }
</script>

<style scoped>
  .rateBox {
    width: 100vw;
    padding: 0 10px 10px;
    border-bottom: 5px solid #eee;
  }

  .rateHead {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
  }

  .rateBody, .rateBodyItem2, .rateBodyItem3, .rateBodyItem4 {
    margin-top: 15px;
  }

  .rateBodyItem1 {
    display: flex;
    align-items: center;
  }

  .rateBodyItem1 img {
    width: 50px;
    border-radius: 50px;
    margin-right: 10px;
  }

  .rateBodyItem2 {
    line-height: 25px;
  }

  .rateBodyItem3 {
    color: #ccc;
  }

  .rateBodyItem4 {
    display: flex;
  }

  .rateBodyItem4 img {
    margin-right: 5px;
    width: 100px;
    height: 100px;
  }


</style>
