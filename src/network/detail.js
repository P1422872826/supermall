import request from "./request";

export function getDetail(iid) {
  return request({
    url: 'detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: 'recommend'
  })
}


export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.lowNowPrice
    this.desc = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.shopName = shopInfo.name
    this.sells = shopInfo.cSells
    this.goods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class Params {
  constructor(info, rule) {
    this.info = info
    this.rule = rule
  }
}
