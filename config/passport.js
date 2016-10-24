var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/users');

module.exports = function(passport){

  passport.serializeUser(function(user,done){
    done(null, user.id);
  });

  passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
      done(err,user);
    });
  });

  //Local login strategy
  passport.use('local-login', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, username, password, done){
    User.findOne({ 'local.username' : username }, function(err,user){
      if (err){
        return done(err);
      }
      if (!user){
        return done(null, false, req.flash('loginMessage','Username Not Found!'));
      }
      if (!user.validPassword(password)){
        return done(null, false, req.flash('loginMessage','Incorrect Password!'));
      }
      return done(null,user);
    });
  }));

  //Local user creation strategy
  passport.use('local-createUser', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, username, password, done){
    process.nextTick(function(){
      User.findOne({ 'local.username' : username }, function(err, user){
        
        //Return error if an err occurs
        if (err){
          return done(err);
        }
      
        //Check to see if username already exists
        if (user){
          return done(null, false, req.flash('createuserMessage', 'That user name is already take.'));
        } else { //Create new user instead
            var newUser = new User();

            newUser.local.username = username;
            newUser.local.password = newUser.generateHash(password);

            newUser.save(function(err){
              if (err){
                throw err;
              }
              return done(null, newUser);
            });
          } 
      });
    });
  }));
}


