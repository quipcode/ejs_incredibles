var express = require('express');
var router = express.Router();

var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, users){
    if(err){
      throw err;
    }
    res.render('index', { title: 'Express', users: users});
  });
});

// router.get('/:username',function(req,res,next){
//   User.findOne({githubUsername: req.params.githubUsername}, function(err, question){
//     if(err){
//       return res.json(err);
//     }
//     res.json(question);
//   });

//   User.findOne({});
// });



router.get('/login', function(req, res, next){
  res.render('login');
});

router.get('/chat', function(req, res) {
  res.render('chat')
});

router.get('/code_practice', function(req, res) {
  res.render('code_practice')
});

router.get('/sign_up', function(req,res,next){
  res.render('sign_up');
});

router.post('/sign_up', function(req,res,next){

  res.json({message: "successfully added new user"});
});

// router.get('/auth', function(req, res, next){
//   res.render('github_login');
// });

// router.post('/auth/github', function(req,res,next){
//   res.json({
//     message: 'life happens',
//     username: req.body.username,
//     password: req.body.password,
//   });
// });

module.exports = router;
