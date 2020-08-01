//app.js
let handler={
  //小程序初始化
  onLaunch(){
    console.log('app init...')
  },
  globalData: {
   user:{
     name:'',
     avator:''
   }
  }
}


App(handler);