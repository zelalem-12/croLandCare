'user strict';

const 
      express = require('express'),
      router = express.Router(),
      passport = require('passport'),
      jwt = require('jsonwebtoken'),
      config = require('../config/database'),
      User = require('../model/user');
      bodyParser = require('body-parser'); 
      multer = require('multer'); 
  // ................Guest Service API -----
var time = new Date();
// User Register Endpoint
router.post('/register', (req, res, next) => {
 let newUser = new User({
    userID: req.body.passport,
    first_name: req.body.first_name,
    middle_name: req.body.middle_name,
    last_name: req.body.last_name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    date_registered: time.getTimezoneOffset(),
    'user_detail.phone': req.body.phone,
    'user_detail.gender': req.body.gender,
    'user_detail.investment_capital': req.body.investment_capital,
    'user_detail.education': req.body.ducation,
    'user_detail.experiance': req.body.experiance,
    'user_detail.birth_date': req.body.birth_date,
    'user_detail.address.nationality': req.body.nationality,
    'user_detail.address.city': req.body.city,
    'user_detail.address.subcity': req.body.subcity,
    'user_detail.address.woreda': req.body.woreda,
    'user_detail.address.kebele': req.body.kebele,
    'user_detail.address.house_number': req.body.house_number,
    'user_detail.address.post_box': req.body.post_box
  });
  User.addUser(newUser, (err,user ) => {
    if(err){
      res.json({success: false, msg:'Failed to register User', data: newUser});
    } else {
      res.json({success: true, msg:'User registered', user: user});
    }
  });
});

// User Authenticate endpoint
router.post('/login', (req, res, next) => {
  const username = req.body.username,
         password = req.body.password;
  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'user is not found'});
    }
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign({data: user}, config.secret, {
          expiresIn: 604800 // 1 week
        });
        res.json({success: true, token: `Bearer ${token}`, user: user});
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

//...... User Service API-----------

// getting Authenticated user
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json(req.user);
});

// user prifile update
router.put('/:user', (req, res) => {
 const user =req.params.user,
   newData =  req.body.newData;
 User.updateProfile(user, newData, (err, resp) => {
   if(err) throw err;
   if(!resp) throw `${user} didn't found`;
   else { res.json({message: `User ${user} updated successfully`});}
 });  
});

// ....... Admin Service API.............

router.get('/admin-notification/:admin', (req, res) => {
  User.find({username:req.params.admin}, {notification:1}, (err, response ) => {
     if(err)  throw err;
     if(!response) throw `No farmland exixts for farrmland id ${farmland}`;
          console.log(response[0].notification);
      res.json(response[0].notification);
 });
});
router.get('/user-notification/:username', (req, res) => {
  User.find({username: req.params.username}, {_id:0, notification:1}, (err, response ) => {
     if(err)  throw err;
     if(!response) throw `No farmland exixts for farrmland id ${farmland}`;
      console.log(response[0].notification);
      res.send(response[0].notification);
 });
});
 
// .... Searching User by passport
router.get('/:passport', (req, res) => {
  const user_id = req.params.passport;
  User.findUserByPassport(user_id , (err, user) =>{
    if(err) throw err;
    if(!user) throw `${user_id} didn't found`;
    else{res.json(user);}
  });});

// .... Deleting unsuccessfull user
 router.delete('/:passport', (req, res) => {
  const user_id = req.params.passport;
  User.deleteUser(user_id , (err, user) =>{
    if(err) return next(err);
    if(!user) throw `${user_id} didn't found`;
    else{res.send('User deleted');}
     });
 });

module.exports = router;
