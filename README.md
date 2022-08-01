<h1> ChatterBox Backend! </h1>

<h2>Back-end API designed for the Chatterbox app found <a href='https://chatterbox-message-app.herokuapp.com/'> here </a> front-end found <a href='https://github.com/marcusloy77/ChatterBox'> here </a>  </h2>
  
<h2> Tech Stack: Express, BCrypt, PG, PSQL </h2>

<p> Main idea for the backend was to provide dynamically created tables to pair users, in order to save message history.
    Also allows for further development using Socket.io, as this was the initial plan for the project before timing caused it to utilize polling instead.
    Basic idea is when a user is created, a friendList table is also created for that user. Whenever a friend is added, a conversation table is also created based on both of their ID's. This allowed for creating, reading and adding to conversation history between any two users who were friends.
</p>
