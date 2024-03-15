const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'berhandgao',
  password : 'gaozigeng',
  database : 'employee_system',
  connectTimeout: 20000,
});

// 使用连接池获取连接
pool.getConnection((err, connection) => {
  if (err) throw err; // 如果连接有错误，抛出错误
  console.log('数据库连接成功！');
  connection.release(); // 释放连接回池子
});

module.exports = pool;
