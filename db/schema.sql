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

CREATE TABLE friends_list_{user_id}(
  id SERIAL PRIMARY KEY,
  friend_id TEXT
);

CREATE TABLE conversation_{user_id1}_{user_id2}(
  id SERIAL PRIMARY KEY, 
  user_id_1 INTEGER, 
  user_id_2 INTEGER
);

