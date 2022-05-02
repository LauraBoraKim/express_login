// var express = require('express');
// var router = express.Router();
// const user = require('../models/user');

// /* GET users listing. */


// // login
// router.post('/login', async function(req, res){
// 	let data = req.body;
//   console.log(data);
//   let userData = await user.login(data);
//   if(!userData.length){
//     res.redirect('/');
//   }else{
//     console.log("성공!!!")
//     res.render('main', {title: "Main", user: userData[0]});
//   }
// });

// module.exports = router;
