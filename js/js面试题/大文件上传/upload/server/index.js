const http = require('http')
const fse = require('fs-extra')
const path = require('path')
const multiparty = require('multiparty')

const server = http.createServer()
const UPLOAD_DIR = path.resolve(__dirname, './', 'target') // 大文件存储的地址

server.on('request', async(req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', '*')
  if(req.method === "OPTIONS") {
    res.status = 200
    res.end()
    return
  }
  const multipart = new multiparty.Form()
  multipart.parse(req, async(err, fields, files) => {
    // console.log(fields, files);
    if(err) return
    const [chunk] = files.chunk
    const [hash] = fields.hash
    const [filename] = fields.filename
    const chunkDir = path.resolve(UPLOAD_DIR, filename)

    // 如果切片目录不存在
    if(!fse.existsSync(chunkDir)) {
      await fse.mkdirs(chunkDir)
    }

    await fse.move(chunk.path, `${chunkDir}/${hash}`)
    res.end('ok')
  })  
})


server.listen(3000, () => {
  console.log('正在监听3000端口');
})
