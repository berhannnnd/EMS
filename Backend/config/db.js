const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host     : '100.100.100.4',
  user     : 'flecia',
  password : 'Flecia.1014',
  database : 'employee_system'
});

// 使用连接池获取连接
pool.getConnection((err, connection) => {
  if (err) throw err; // 如果连接有错误，抛出错误
  console.log('数据库连接成功！');
  connection.release(); // 释放连接回池子
});

module.exports = pool;