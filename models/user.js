// var mongoose = require('mongoose');

// // Mongoose Schema definition
// var schema = mongoose.Schema;
// var userSchema = new schema({
//     username: {type: String, unique: true},
//     password: String,
// });

// //Register Function
// userSchema.statics.register = function(data, cb){

//     var new_user = new user({
//         username: data.username,
//         password: data.password,
//     });

//     new_user.save(function(err){
//         if(!err){
//             cb(true);
//         }else{
//             cb(false);
//         }
//     });
// }

// userSchema.statics.login = function(data, cb){

//     user.findOne({username: data.username}, function(err, user){

//         if(!err && user){
//             if(user.password == data.password){
//                 user.save(function(err){
//                     if(!err){
//                         cb(user);
//                     } else {
//                         cb(false);
//                     }
//                 });
//             }    
//         } else{
//             cb(false);
//         }
//     });
// }

// // Mongoose Model definition
// var user = mongoose.model('users', userSchema);

// module.exports = user;
var fs = require('fs');
var path = require('path');
var exports = module.exports = {};

exports.login = (logindata) => {
    let users= JSON.parse(fs.readFileSync(path.resolve(__dirname, "./users.json")));
    
    let matchedUser = users.filter( element => element.id === logindata.id && element.password === logindata.password);
    //console.log(matchedUser[0]);

    return matchedUser
}


exports.checkPermission = (userId) => {
    let users= JSON.parse(fs.readFileSync(path.resolve(__dirname, "./users.json")));
    
    let matchedUser = users.filter( element => element.id === userId.id);
    //console.log(matchedUser[0]);

    if(!matchedUser.length) return false

    return matchedUser[0].permission.read
}
