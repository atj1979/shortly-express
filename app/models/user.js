var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');


var User = db.Model.extend({
  function storeUNPW (username, password){
    bcrypt.hash(password, null, null, function(err, hash){
      if(err){
        console.log("error", error);
      }else{
        // store the hashed pw into database
        insert users ('username', 'password')  values (username, hash);
      }
    }
  });
});

module.exports = User;




bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
    });
});

// bcrypt.compare(pw, hash, function())
