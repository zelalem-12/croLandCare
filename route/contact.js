'user strict';

const 
      express = require('express'),
      router = express.Router(),
      Contact = require('../model/contact');

 router.post('/', (req, res, next) => {
let newContact = new Contact({
    first_name:  req.body.first_name,
    last_name:  req.body.last_name,
    email:  req.body.email,
    phone: Number(req.body.phone),
    message: req.body.message,});
Contact .saveContact(newContact, (err, contact ) => {
    if(err){
      res.json({success: false, msg:'Failed to contact Us'});
    } else {
      res.json({success: true, msg:'Thanks for Contacting us'});  } });
});
// gettin  contacts from clinet
router.get('/', (req, res) => {
    Contact.getContacts((err, contacts) => {
      if (err) throw err
           else {
             res.send(contacts);
             // console.log(contacts);
             } })});

  module.exports = router;
      