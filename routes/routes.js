module.exports = function(app,passport){
  app.get('/', function(req,res){
    res.render('splash.ejs');
  });

  //Login routes
  app.get('/login', function(req,res){
    res.render('login.ejs',{ message : req.flash('loginMessage') });
  });

  app.post('/login', passport.authenticate('local-login',{
    successRedirect : '/home',
    failureRedirect : '/login',
    failureFlash    : true
  }));

  //Admin routes for creating users
  app.get('/admin', function(req,res){
    res.render('createUser.ejs',{ message : req.flash('createuserMessage') });
  });

  app.post('/admin', passport.authenticate('local-createUser',{
    successRedirect : '/home',
    failureRedirect : '/admin',
    failureFlash    : true
  }));

  //Force login to access home page
  app.get('/home', isLoggedIn, function(req,res){
    res.render('index.ejs'); 
  });

  //Route for logout
  app.get('/logout', function(req,res){
    req.logout();
    res.redirect('/');
  });

  function isLoggedIn(req,res,next){
    if (req.isAuthenticated())
      return next();
    res.redirect('/');
    console.log('rediret to /');
  };
}
