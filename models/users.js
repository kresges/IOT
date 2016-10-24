var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

//Database storage format.
var userSchema = mongoose.Schema({
  
  local      : {
    username : String,
    password : String
  }
});

//Generate hash
userSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
};

//Check password
userSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);
