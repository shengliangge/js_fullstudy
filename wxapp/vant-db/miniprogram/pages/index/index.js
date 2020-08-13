import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newGroupModal: false,
    groupName: ''
  },
  showNewGroupModal() {
    this.setData({
      newGroupModal: true
    })
  },
  onGroupNameChange(event) {
    console.log(event)
    this.setData({
      groupName: event.detail
    })

  },
  closeDialog() {
    this.setData({
      newGroupModal: false
    })
  },
  // 创建群组
  createGroup() {
    const self = this
    let groupName = this.data.groupName
    if (groupName === '') {
      Notify({ type: 'primary', message: '赶紧给我起名字', duration: 1500, selector: '#notify-selector', background: '#fdc3545' });
      self.selectComponent("#new-group-modal").stopLoading()
      return
    }
    //调用云函数
    wx.cloud.callFunction({
      name: 'createGroup',
      data: {
        groupName
      },
      success(res) {
        console.log(res)
        self.setData({
          groupName:'',
          newGroupModal:false
        })
        Notify({ type: 'primary', message: '创建成功', duration: 1500, selector: '#notify-selector', background: '#28a745' });
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/group/group',
            success: function(res){
              // success
            },
            fail: function() {
              // fail
            },
            complete: function() {
              // complete
            }
          })
        }, 2000);
      },
      fail(err) {
        console.log(err)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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