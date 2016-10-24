module.exports = function(app,passport){
  app.get('/', function(req,res){
    res.render('splash.ejs');
  });

  app.get('/login', function(req,res){
    res.render('login.ejs',{ message : req.flash('loginMessage') });
  });

  app.get('/home', isLoggedIn, function(req,res){
    res.render('index.ejs'); 
  });

  app.get('/logout', function(req,res){
    res.logout();
    res.redirect('/');
  });

  function isLoggedIn(req,res,next){
    if (req.isAuthenticated())
      return next();
    res.redirect('/');
  };
}
