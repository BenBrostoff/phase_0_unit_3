# U3.W7: Intro to SQLite

## Release 0: Create a dummy database

<!-- paste your terminal output here -->
The below is code to create the database via the Terminal:

1. `CREATE TABLE users (
   ...>   id INTEGER PRIMARY KEY AUTOINCREMENT,
   ...>   first_name VARCHAR(64) NOT NULL,
   ...>   last_name  VARCHAR(64) NOT NULL,
   ...>   email VARCHAR(128) UNIQUE NOT NULL,
   ...>   created_at DATETIME NOT NULL,
   ...>   updated_at DATETIME NOT NULL
   ...> );`

## Release 1: Insert Data 
<!-- paste your terminal output here -->

Here's your output after inserting two user entries: 

1. `INSERT INTO users (first_name, last_name, email, created_at, updated_at)
  VALUES
  ('Kimmey', 'Lin', 'kimmy@devbootcamp.com', DATETIME('now'), DATETIME('now'));`
 
2. `INSERT INTO users (first_name, last_name, email, created_at, updated_at) 
  VALUES
  ('Ben', 'Brostoff', 'ben.brostoff@gmail.com', DATETIME('now'), DATETIME('now'));`
 
3. `SELECT * FROM users`
   

id          first_name  last_name   email                  created_at           updated_at         
----------  ----------  ----------  ---------------------  -------------------  -------------------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-05-18 16:28:44  2014-05-18 16:28:44
2           Ben         Brostoff    ben.brostoff@gmail.co  2014-05-18 16:29:46  2014-05-18 16:29:46


## Release 2: Multi-line commands

I did initially receive the error message that the column email was not unique. One way to amend this error is to change the entry's column email by creating a new entry, like in the below.

1. `INSERT INTO users (first_name, last_name, email, created_at, updated_at)
  VALUES
  ('Kimmey', 'Lin', 'kimmy@gmail.com', DATETIME('now'), DATETIME('now'));`

id          first_name  last_name   email                  created_at           updated_at         
----------  ----------  ----------  ---------------------  -------------------  -------------------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-05-18 16:28:44  2014-05-18 16:28:44
2           Ben         Brostoff    ben.brostoff@gmail.co  2014-05-18 16:29:46  2014-05-18 16:29:46
3           Kimmey      Lin         kimmy@gmail.com        2014-05-18 16:33:55  2014-05-18 16:33:55

## Release 3: Add a column
<!-- paste your terminal output here -->
1. `ALTER TABLE users ADD COLUMN nickname VARCHAR(64);`
2. `.schema users`

  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(64) NOT NULL,
  last_name  VARCHAR(64) NOT NULL,
  email VARCHAR(128) UNIQUE NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
, nickname VARCHAR(64));

One problem I encountered here was that nickname is not set to NOT NULL. I encounted errors when trying to change the default value. 

In the below, I set the two Kimmy's equal to Kimchee on `nickname` and my own `nickname` equal to Benny.

3. `UPDATE users SET nickname='Kimchee' WHERE Id=1 or Id=3;`
4. `UPDATE users SET nickname='Benny' WHERE Id=2;`
5. `SELECT * FROM users;`

id          first_name  last_name   email                  created_at           updated_at           nickname  
----------  ----------  ----------  ---------------------  -------------------  -------------------  ----------
1           Kimmey      Lin         kimmy@devbootcamp.com  2014-05-18 16:28:44  2014-05-18 16:28:44  Kimchee   
2           Ben         Brostoff    ben.brostoff@gmail.co  2014-05-18 16:29:46  2014-05-18 16:29:46  Benny     
3           Kimmey      Lin         kimmy@gmail.com        2014-05-18 16:33:55  2014-05-18 16:33:55  Kimchee


## Release 4: Change a value
<!-- paste your terminal output here -->

Another use of UPDATE should do the trick here. I used DATETIME(now) for the timestamp on the update.

1. `UPDATE users SET first_name='Kimmy Lee' where id=1 or id=3;`
2. `UPDATE users SET nickname='Ninja Coder' where id=1 or id=3;`
3. `UPDATE users SET updated_at = DATETIME ('now') where id=1 or id=3;`
4. `SELECT * FROM users`

id          first_name  last_name   email                  created_at           updated_at           nickname   
----------  ----------  ----------  ---------------------  -------------------  -------------------  -----------
1           Kimmy Lee   Lin         kimmy@devbootcamp.com  2014-05-18 16:28:44  2014-05-18 16:56:20  Ninja Coder
2           Ben         Brostoff    ben.brostoff@gmail.co  2014-05-18 16:29:46  2014-05-18 16:29:46  Benny      
3           Kimmy Lee   Lin         kimmy@gmail.com        2014-05-18 16:33:55  2014-05-18 16:56:20  Ninja Coder

## Release 5: Reflect
<!-- Add your reflection here -->
I gained greater command of the sqlite3 terminal line commands via this exercise. I now can effectively use ALTER TABLE, UPDATE and several other useful commands.

One area I'm still confused on here is null values. I received the following error when trying to make the nickname column NOT NULL; 

`Error: Cannot add a NOT NULL column with default value NULL`

I intend to consult others' solutions to solve this issue. 

I also realized that I had two Kimmy entries here, with the only difference being different emails. The following command eliminates the final entry:

1. `DELETE FROM users WHERE id=3;`
2. `SELECT * FROM users`

id          first_name  last_name   email                  created_at           updated_at           nickname   
----------  ----------  ----------  ---------------------  -------------------  -------------------  -----------
1           Kimmy Lee   Lin         kimmy@devbootcamp.com  2014-05-18 16:28:44  2014-05-18 16:56:20  Ninja Coder
2           Ben         Brostoff    ben.brostoff@gmail.co  2014-05-18 16:29:46  2014-05-18 16:29:46  Benny  
