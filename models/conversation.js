const db = require('../db/db')

const Conversation = {
  createConversation: (id1, id2) => {
    let idFirst
    let idSecond
    if (id1 > id2) {
      idFirst = id1
      idSecond = id2
    } //cheeky way of making sure every reference to conversation works
    else {
      idFirst = id2
      idSecond = id1
    }

    sql = `
    CREATE TABLE conversation_${idFirst}_${idSecond}(id SERIAL PRIMARY KEY, message TEXT, sender_id INTEGER, sender_username TEXT)
    `
    return db.query(sql)
  },

  addMessage: (sender_id, id2, message, sender_username) => {
    let idFirst = sender_id
    let idSecond = id2
    if (sender_id > id2) {
      idFirst = sender_id
      idSecond = id2
    } 
    else {
      idFirst = id2
      idSecond = sender_id
    }
    if (idFirst > idSecond){

    sql = `
    INSERT INTO conversation_${idFirst}_${idSecond}(message, sender_id, sender_username) VALUES($1, $2, $3)
    `

    return db.query(sql, [message, sender_id, sender_username])
    }
    else {
      return false
    }
  },

  getConversation: (id1, id2) => {
    let idFirst
    let idSecond
    if (id1 > id2) {
      idFirst = id1
      idSecond = id2
    } 
    else {
      idFirst = id2
      idSecond = id1
    }
    sql = `
    SELECT * FROM conversation_${idFirst}_${idSecond} ORDER BY id DESC LIMIT 30 
    `
    return db.query(sql).then(dbRes => dbRes.rows)
  },

  createRoom: (username1, username2, id1, id2) => {
    sql = `
    INSERT INTO rooms(user_name_1, user_name_2, user_id_1, user_id_2) VALUES($1,$2,$3,$4)
    `
    return db.query(sql, [username1, username2, id1, id2])
  },

  getRoomNumByIds: (id1, id2) => {
    sql = `
    SELECT * FROM rooms WHERE (user_id_1 = $1 AND user_id_2 = $2) OR (user_id_1 = $2 AND user_id_2 = $1)
    `
    return db.query(sql, [id1, id2])
  },
  getRoomNumByUsernames: (username1, username2) => {
    sql = `
    SELECT * FROM rooms WHERE (user_name_1 = $1 AND user_name_2 = $2) OR (user_name_1 = $2 AND user_name_2 = $1)
    `
    return db.query(sql, [username1, username2])
  }
}

module.exports = Conversation