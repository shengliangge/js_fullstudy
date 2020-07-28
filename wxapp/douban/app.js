//app.js
App({
  onLaunch: function () {
    wx.db={}
    wx.db.url=(url)=>{
      return `https://api.douban.com${url}`
    }
    let info=wx.getSystemInfoSync();
    // console.log(info)
    wx.db.statusBarHeight=info.statusBarHeight
    // console.log(wx.db.statusBarHeight)
    if(info.platform==='android'){
      wx.db.navBarHeight=48
    }else{
      wx.db.navBarHeight=44
    }
   // 获取手机系统信息
  //  wx.getSystemInfo({
  //   success: res => {
  //     //导航高度
  //     this.globalData.navHeight = res.statusBarHeight + 20;//  46是我为我的头部定义的一个高度，
  //     console.log(res,this.globalData.navHeight)
  //   }, fail(err) {
  //     console.log(err);
  //   }
  // })
  },
  globalData: {
    userInfo: null
  }
})