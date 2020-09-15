var mysql = require('mysql')
const { database } = require('./defaultConfig')
var config = require('./defaultConfig')
// 连接线程池
var pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT
})

//统一连接数据库的方法

let allServices = {
  query: function (sql, values) {
    return new Promise((resolve, reject) => {
      //建立数据库连接
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
        } else {
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()      //释放连接
          })
        }
      })
    })
  }
}

//读取users表所有数据
let getAllUsers = function () {
  let _sql = `select * from users;`
  return allServices.query(_sql)
}

//导出方法
module.exports = {
  getAllUsers
}