var fs = require('fs')
fs.readFile('./data/hello.txt', function (error, data) {
  if (error) {
    console.log('文件读取失败');
  } else {
    console.log('文件读取成功');
    console.log(data.toString());
  }
}) 