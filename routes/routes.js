var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
  res.render('index.ejs');
});

router.get('/newPage',function(req,res){
  res.render('newPage.ejs')
});

module.exports = router;
