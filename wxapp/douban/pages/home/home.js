// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    movie:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getCity((city) => {
      this.loadData(0,{city:city,apikey:'0df993c66c0c636e29ecbb5344252a4a'})
    })
    this.setData({
      search: this.search.bind(this)
    })
  },
  loadData(idx,params) {
    let url=wx.db.url('/v2/movie/in_theaters')
    wx.request({
      url: url,
      data: params,
      header:{'content-type':'json'},
      success:  (res)=> {
        console.log(res)
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
  },
  getCity(succeed) {
    //拿到当前所在的城市名称
    //先拿到当前所在区域的经纬度（小程序自带api）
    wx.getLocation({
      success: function (res) {
        wx.request({
          url: 'https://api.map.baidu.com/reverse_geocoding/v3',
          data: {
            ak: 'rptXHa8hm7ohCXbNNr9qNX83qKASOGf9',
            output: 'json',
            coordtype: 'wgs84ll',
            location: `${res.latitude},${res.longitude}`
          },
          success: (res) => {
            // console.log(res)
            let city = res.data.result.addressComponent.city
            succeed && succeed(city)
          },
          fail: () => {
            console.log('获取当前城市失败')
          }
        })
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },


  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{ text: '搜索结果', value: 1 }, { text: '搜索结果2', value: 2 }])
      }, 200)
    })
  },
  selectResult: function (e) {
    console.log('select result', e.detail)
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