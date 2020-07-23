module.exports = {
  'GET /articles'(req, res) {
    return res.json({
      code: 0,
      articles:[{
        daate:'7-22',
        items:[{
          title:'aaaa',
          pic:'https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/0',
          id:1,
        },{
          title:'bbb',
          pic:'https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/0',
          id:2,
        },{
          title:'ccc',
          pic:'https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/0',
          id:3,
        },]
      },{
        daate:'7-23',
        items:[{
          title:'ddd',
          pic:'https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/0',
          id:4,
        },{
          title:'eee',
          pic:'https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/0',
          id:5,
        },{
          title:'fff',
          pic:'https://puui.qpic.cn/vpic/0/l0034780bcp_160_90_3.jpg/0',
          id:6,
        },]
      }]
    })
  }
}