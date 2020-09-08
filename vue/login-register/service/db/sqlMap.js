var sqlMap = {
    user: {
        add: 'insert into user (username, mail, password) values (?,?,?)',
        select: 'select * from user'
    }
}

module.exports = sqlMap;