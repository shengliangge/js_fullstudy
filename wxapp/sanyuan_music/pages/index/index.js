//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerList: [],
    recommendList: [],
    isRecommendListLoading: true
  },
  onLoad: function () {
    wx.request({
      //接口地址
      url: 'http://47.98.159.95/m-api/banner',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        // console.log(res)
        // success
      // if(res.)
        this.setData({
          bannerList:res.data.banners,
          isRecommendListLoading: false
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })

  wx.request({
    //接口地址
    url: 'http://47.98.159.95/m-api/personalized',
    data: {},
    method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    // header: {}, // 设置请求的 header
    success: (res) => {
      console.log(res)
      // success
    // if(res.)
      this.setData({
        
      })
    },
    fail: function () {
      // fail
    },
    complete: function () {
      // complete
    }
  })
}
})
