// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carts: [
    ],
    totalPrice: 0,
    colorSelect:'white',
    selectAllStatus:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow')
    setTimeout(() => {
      this.setData({
        carts: [
          { id: 1, title: '新鲜芹菜 半斤', image: '/image/s5.png', num: 4, price: 0.01, selected: true },
          { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true }]
      })
    }, 1000)
  },
  selectList(e) {
    console.log(e);
  },

  //点击全选
  selectAll(e) {
    console.log(e)
    let selectAllStatus=this.data.selectAllStatus
    selectAllStatus=!selectAllStatus
    this.setData({
      selectAllStatus:selectAllStatus
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onHionUnloadde')
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