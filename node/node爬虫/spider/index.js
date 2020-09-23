const https = require('https')
const cheerio = require('cheerio')
let fs = require('fs')
//通过https模块的get方法请求网站链接，再回调函数中获取资源
https.get('https://movie.douban.com/top250', (res) => {
  // 因为获取到的资源是分段返回的，所以需要拼接（html）
  let html = ''
  //res.on类似与addEventListener
  res.on('data', (chunk) => {
    html += chunk
    // console.log(html);
  })
  // 当res数据加载完成，去执行XXX逻辑
  res.on('end', () => {
    //操作dom
    const $ = cheerio.load(html)
    // 存放爬取到的数据
    let allFilms = []
    $('li .item').each(function () {
      const title = $('.title', this).text()
      const star = $('.rating_num', this).text()
      const pic = $('.pic img', this).attr('src')
      allFilms.push({ title, star, pic })
    })

    fs.writeFile('./top250.json', JSON.stringify(allFilms), error => {
      if (error) {
        console.log('文件写入失败');
      } else {
        console.log('文件写入成功');
      }
    })
  })
})