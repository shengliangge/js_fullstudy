// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: "true",
    indicatorColor: "rgba(0,0,0,.3)",
    autoplay: "true",
    interval: "5000",
    duration: "1000",
    circular: "true",
    banners: [],
    recommendList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求接口数据
    // 小程序是本地的，接口是远程的
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/banner', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        "Content-Type": "application/json"
      },
      //成功回调函数 成功 200
      success: (res) => {
        console.log(res.data.banners)
        this.setData({
          banners: res.data.banners
        })
      }
    }),
      wx.request({
        // url: 'http://neteasecloudmusicapi.zhaoboy.com/banner', //仅为示例，并非真实的接口地址
        // data: {
        // },
        // header: {
        //   "Content-Type": "application/json"
        // },
        // //成功回调函数 成功 200
        // success: (res) => {
        //   console.log(res.data.banners)
        //   this.setData({
        //     banners: res.data.banners
        //   })
        // }
        url: 'http://neteasecloudmusicapi.zhaoboy.com/personalized',
        success: (res) => {
          console.log(res)
          this.setData({
            recommendList: res.data.result
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})