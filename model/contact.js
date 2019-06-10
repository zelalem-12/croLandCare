const 
    mongoose = require('mongoose'),
    request = require('request');
    //reqPromise = require('request-promise');


// Farmlands Schema
const ContactSchema = mongoose.Schema({
  first_name: {type: String,  required: true },
  last_name: { type: String, required: true }, 
  email: { type: String, required: true},
  phone: { type: Number, required: true},
  message: { type: String, required: true }
});
const Contact = module.exports = mongoose.model('Contact', ContactSchema);

// Add new conntact from a client
module.exports.saveContact = function(newContact, callback){
    newContact.save(callback);
  };

  // get all contents
module.exports.getContacts = function(callback){
    Contact.find({}, callback);
  };