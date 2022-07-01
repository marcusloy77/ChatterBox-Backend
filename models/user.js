const db = require("../db/db")

const User = {
  create: (firstName, lastName, userName, email, passwordDigest) => {
    const sql = `
    INSERT INTO users(first_name, last_name, user_name, email, password_digest) VALUES($1, $2, $3, $4, $5)
    RETURNING *
    `
    return db
      .query(sql, [firstName, lastName, userName, email, passwordDigest])
      .then(dbRes => dbRes.rows[0].user_name)
  },
  findByUserName: (userName) => {
    const sql = `
    SELECT * FROM users WHERE user_name = $1`
    return db
      .query(sql, [userName])
      .then(dbRes => {
        // console.log(dbRes.rows[0].user_name)
        return dbRes.rows[0]})
  },
  findById: (id) => {
    const sql = `
    SELECT * FROM users WHERE id = $1`
    return db
      .query(sql, [id])
      .then(dbRes => {
        // console.log(dbRes.rows[0].user_name)
        return dbRes.rows[0]})
  }
}


module.exports = User