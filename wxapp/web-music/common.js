const bannerEle = document.querySelector('#banner')
// let banner = document.createElement('img')
// ajax
// wx.request 从本地小程序->服务器
// localhost:1234
// fetch web端做接口请求的地方
fetch('http://neteasecloudmusicapi.zhaoboy.com/banner')
  .then(data => data.json())
  .then(data => {
    //  console.log(data);
    if (data.code == 200) { //状态码
      const banners = data.banners;
      const html = banners.map((banner) => {
        console.log(banner)
        return `
       <img src="${banner.imageUrl}">
       `
      })

      console.log(html)
      bannerEle.innerHTML=html.join('');
      // // array->html DOM节点
      // // bannerEle.innerHTML=banners.map()
      // for (let banner of banners) {
      //   bannerEle.innerHTML += `<img src="${banner.imageUrl}">`
      //   // console.log(banner)
      // }
    } else {
      console.log('请求失败')
    }
  })