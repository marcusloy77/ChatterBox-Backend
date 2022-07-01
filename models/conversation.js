const db = require('../db/db')

const Conversations = {
  createConversation: (id1, id2) => {
    console.log(`create tables using ${id1, id2}, table names are ${id1}_${id2}_conv and ${id2}_${id1}_conv`)
  },



  findByUserId: (id) => {
    console.log(`user requesting pcs list for user: ${id}`)
    const sql = `
    SELECT * FROM pc_list WHERE user_id = $1 ORDER BY id DESC`

    return db
      .query(sql, [id])
      .then(dbRes => dbRes.rows)
  },
}