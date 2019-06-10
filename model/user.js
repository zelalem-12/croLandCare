'user strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
//const Farmland = require('./farmland');

var time = new Date();

// Farmers Schema
const UserSchema = mongoose.Schema({
     userID: { type: String, unique: true, required: true },
    first_name: { type: String, required: true },
    middle_name: { type: String, required: false },
    last_name: { type: String, required: true },
    username: { type: String, unique: true, required: true },
    email:  { type: String, unique: true,required: true },
    password: { type: String, required: true },
    isAdmin:  {type: Boolean, default: true},
    date_registered: {type: String, required: true, default: ''},
    farmland_owned: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Farmalnd', default: []}],
    user_detail: {
              user_picture: { data: Buffer, contentType: String},
              phone: { type: String,  default:"" },  
              gender: {type: String, default:""},
              investment_capital:{type: Number, default: 0},
              education: {type: String, default: ""},
              experiance: {type: String, default: ""},
              birth_date:{type: String, required: true, default: "01/01/1970"},
              address: {
                      nationality: {type: String, default:""},
                      city: {type: String, default:""},
                      subcity: {type: String, default:""},
                      woreda: {type: String, default:""},
                      kebele: {type: String, default:""},
                      house_number: {type: String, default:""},
                      post_box: {type: String, default:""},
                        }
                      }
});

const User = module.exports = mongoose.model('User', UserSchema);

//..... Guest Service Api ......

// Adding new user
module.exports.addUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  }); 
};

// user authenticate
module.exports.getUserByUsername = (username, callback) => {
  User.findOne({username: username},callback);
};
module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
};

//..... User Service Api ......

// Updating user profile picture
// module.exports.uploadProfilePicture = (user, img, callback) => {
//   findByIdAndUpdate(user, )
// };

module.exports.updateProfile = (user, newData, callback ) => {
 User.findByIdAndUpdate(user, 
              {$set: {
                first_name: newData.first_name,
                middle_name: newData.middle_name,
                last_name: newData.last_name,
                username: newData.username,
                email: newData.email,
                user_detail: {
                      phone: newData.user_detail.phone,
                      gender: newData.user_detail.gender,
                      investment_capital: newData.user_detail.investment_capital,
                      ducation: newData.user_detail.education,
                      experiance: newData.user_detail.experiance,
                      birth_date: newData.user_detail.birth_date,
                      address: newData.user_detail.address,
                      }
                 }});
};

 
//..... Admin Service Api ......

// Searching user uby passport
module.exports.findUserByPassport = (passport, callback)=> {
  User.find({userID:passport },callback);
};

// Deleting user
module.exports.deleteUser = (user_id, callback) => {
  User.remove({_id: user_id}, callback);  //  On delet user what will happen to the on the farmalnd owned by that user
};

