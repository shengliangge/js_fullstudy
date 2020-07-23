//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    articles:''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 生命周期函数
  onLoad: function () {
    // 请求接口数据
    // 小程序是本地的，接口是远程的
    wx.request({
      url: 'http://localhost:1314/articles', //仅为示例，并非真实的接口地址
      data: {
      },
      header:{
          "Content-Type":"application/json"
      },
      success: (res) =>{
         console.log(res.data.articles)
         
         this.setData({
          articles: res.data.articles
         })
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
