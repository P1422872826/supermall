export default {
  // 添加商品到购物车的时候，商品加一
  addGoodsCount(state, payload) {
    payload.count += 1
  },
  // 如果购物车里没有该商品，则把该商品添加到购物车里
  addGoodsInCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }

}

