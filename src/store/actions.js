export default {
  addCartGoods({commit, state}, payload) {
    let good = state.cartList.find(item => item.iid === payload.iid)

    if (good) {
      // good.count += 1;
      commit('addGoodsCount', good)
    } else {
      payload.count = 1;
      // state.cartList.push(payload)
      commit('addGoodsInCart', payload)
    }
  }
}
