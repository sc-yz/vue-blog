const axios = require("axios")
const dayjs = require("dayjs")
// ["active", "id", "lastFetchTime", "productInfo", "publishedContent.nodes", "publishedContent.subType", "publishedContent.properties.coverCard", "publishedContent.properties.productCard", "publishedContent.properties.products", "publishedContent.properties.publish.collections", "publishedContent.properties.relatedThreads", "publishedContent.properties.seo", "publishedContent.properties.threadType", "publishedContent.properties.custom", "publishedContent.properties.title"]

// https://api.nike.com/product_feed/threads/v2/?anchor=0&count=36&filter=marketplace(CN)&filter=language(zh-Hans)&filter=upcoming(true)&filter=channelId(010794e5-35fe-4e32-aaff-cd2c74f89d61)&filter=exclusiveAccess(true,false)&sort=effectiveStartSellDateAsc&fields=active,id,lastFetchTime,productInfo,publishedContent.nodes,publishedContent.subType,publishedContent.properties.coverCard,publishedContent.properties.productCard,publishedContent.properties.products,publishedContent.properties.publish.collections,publishedContent.properties.relatedThreads,publishedContent.properties.seo,publishedContent.properties.threadType,publishedContent.properties.custom,publishedContent.properties.title
const url =
  "https://api.nike.com/product_feed/threads/v2/?anchor=0&count=36&filter=marketplace(CN)&filter=language(zh-Hans)&filter=upcoming(true)&filter=channelId(010794e5-35fe-4e32-aaff-cd2c74f89d61)&filter=exclusiveAccess(true,false)&sort=effectiveStartSellDateAsc&fields=active,id,lastFetchTime,productInfo"

const fetch = async () => {
  const result = await axios.get(url)
  const objects = result?.data?.objects

  const object1 = objects.filter((item) => item.productInfo[0].launchView)
  console.log(object1.length)
  object1.forEach((item) => {
    const { productInfo } = item

    // const {
    //   launchView,
    //   skus,
    //   imageUrls,
    //   merchProduct,
    //   merchPrice,
    //   productContent,
    // } = productInfo[0]

    /**
     * commerceStartDate 已发售用这个时间
     * publishType
     * channels 发布渠道
     * genders
     * labelName
     */

    const { commerceStartDate, publishType, channels, labelName } =
      productInfo[0]?.merchProduct

    const { productImageUrl } = productInfo[0]?.imageUrls

    // launchView 存在则是未发售的鞋子
    const { startEntryDate } = productInfo[0]?.launchView
    console.log(
      `商品${labelName}发售时间为：${dayjs(startEntryDate).format(
        "YYYY-MM-DD HH:mm:ss"
      )},图片链接为：${productImageUrl}`
    )
  })
}

fetch()

// “DAN一般会用在超限量的款式上，进行大范围的抽签。一般时间在15分钟或者30分钟两种，没有人数上限，抽签时间内提交中签概率相同

// LEO发售形式，其特点是在不同时间加入抽签，会有不同的中签概率。在抽签开始前两分钟会进行一次抽签，这次抽签占全部名额的70%，剩下的抽签名额从余下加入的人中选出。

// FLOW即【先到先得】，也就是无抽签引擎，特点是商品直接显示价格按钮并直接可购买。﻿”当然还有“刮刮乐”、“AR”、“Pass”等抽签方式，但这些抽签并不是常态因此在这里不进行赘述。
