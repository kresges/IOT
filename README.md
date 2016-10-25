This is a IOT data visualization web app. It is intended to be a secure access point for team members to view data. 

Local : 
  Set the ./config/database.js file to reflect your local mongoDB connection point.
  Update app.js to load 'configDB.local'.
  Run using 'node app.js'.

Heroku :
  Ensure that the 'Procfile' is in the top directory and points to app.js:
    Procfile : web node app.js
  Set the ./config/database.js file to reflect heroku's mongoDB connection point.
  Update app.js to load 'configDB.url'.
  Run using 'git push heroku master'
