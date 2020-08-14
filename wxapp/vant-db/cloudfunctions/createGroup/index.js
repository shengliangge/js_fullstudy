// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = "shenglian-ded133"
cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  // console.log(event)
  // console.log(context)
  const userInfo = event.userInfo
  //连通数据库
  return await db.collection('group').add({
    data: {
      name: event.groupName,
      createBy: userInfo.openId,
      createTime: new Date(),
      deleted: false,
      updateTime: new Date()
    }
  })
    .then(res => { //在把相关信息存入group中时再存入一些信息到用户群组
      return db.collection('user-group').add({
        data: {
          groupId: res._id,  //存入group的_id
          userId: userInfo.openId,  //存入当前用户的ID
          invalid: false
        }
      })
    })
}