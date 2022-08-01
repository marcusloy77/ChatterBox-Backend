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


