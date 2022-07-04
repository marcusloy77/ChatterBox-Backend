CREATE DATABASE chatterbox_db;
\c chatterbox_db

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  user_name TEXT,
  email TEXT,
  password_digest TEXT
);


CREATE TABLE $1_friends_list(
  id SERIAL PRIMARY KEY,
  friend_id TEXT
);

CREATE TABLE conversation(
  id SERIAL PRIMARY KEY, 
  user_id_1 INTEGER, 
  user_id_2 INTEGER
);

