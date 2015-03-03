var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');


var User = db.Model.extend({
  tableName: 'users',
  username: '',
  password: '',
  hashpw : function (password){
     bcrypt.hash(password, null, null, function(err, hash){
      if(err){
        console.log("error", error);
      }else{
        // store the hashed pw into database
        console.log('username & password stored!!');
        db.knex('users').insert({username: this.username, password: hash});
      }
    });
  },
  initialize: function (username, password){
    this.username = username;
    this.password = this.hashpw(password);
  }

});

module.exports = User;




  // storeUser :function(username, password){
  //   bcrypt.hash(password, null, null, function(err, hash){
  //     if(err){
  //       console.log("error", error);
  //     }else{
  //       // store the hashed pw into database
  //       console.log('username & password stored!!')
  //       db.Knex('users').insert({username: username, password: hash.password})
  //     }
  //   });
  // }
// bcrypt.genSalt(10, function(err, salt) {
//     bcrypt.hash("B4c0/\/", salt, function(err, hash) {
//         // Store hash in your password DB.
//     });
// });

// bcrypt.compare(pw, hash, function())
