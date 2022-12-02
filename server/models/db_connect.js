require('dotenv').config();
const mysql = require('mysql2');

const con = mysql.createConnection({
    host:process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PSWD,
    databse:process.env.MYSQL_DB
})

const query = (sql, binding) => {
  return new Promise((resolve, reject) => {
    con.query(sql, binding, (err, result, fields)=> {
      if(err) reject(err);
      resolve(result);
    })
  })
}

module.exports = {con, query};
