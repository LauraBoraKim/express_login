//import { login } from '../models/user';
var express = require('express');
var router = express.Router();



//Database Models
//var user = require(path.join(__dirname, 'models/user'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login' });
});

router.get('/main', function(req, res, next) {
  res.render('main', { title: 'Main' });
});

router.get('/list', function(req, res, next) {
  res.render('list', { title: 'list' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'register' });
});

const user = require('../models/user');

/* GET users listing. */


// login
router.post('/', async function(req, res){
	let data = req.body;
  console.log(data);
  let userData = await user.login(data);
  if(!userData.length){
    res.redirect('/');
  }else{
    console.log("성공!!!")
    res.render('main', {title: "Main", user: userData[0]});
  }
});

// 목록 권한 체크
router.post('/list', async function(req, res){
	let data = req.body;
  console.log(data);
  let permission = await user.checkPermission(data);
  if(permission){
    res.json({"write" : true});
  }else{
    res.json({"write" : false});
  }
});




module.exports = router;
