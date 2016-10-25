var basicAuth = require('basic-auth-connect');

//Export Asynchronous callback for authorizing single route.
//This will be used to authorize the admin page and features.
module.exports = {
  auth : basicAuth( function(user, password, callback){
    var result = (user === 'Spencer' && password === 'think');
    callback(null, result);
  })
};

