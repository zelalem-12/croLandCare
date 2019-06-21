const 
    mongoose = require('mongoose');
    User = require('./user');
    
// Farmlands Schema
const FarmlandSchema = mongoose.Schema({
  farmland_area: { type: Number, required: true }, 
  farmland_experiance: { type: String, required: true},
  farmland_description: { type: String, required: true},  
  soil_type: { type: String, required: true},
  physical_address:{ type: String, required: true }, 
  latitude:{type: Number, required: true},
  longitude:{type: Number, required: true}, 
  ownedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  embedded_system: [{ 
                        _id: false,
                        soil_temprature: {type: Number, default: 0},
                        soil_moisture: {type: Number, default: 0},
                        soil_phLevel: {type: Number, default: 0},
                        light_intensity: {type: Number, default: 0},
                        motor_on: {type: String, defaultL: "Off"},
                        measured_at:{type: Number, default: Date.now()}
                      }],
  enviromental_weather: [{
          _id: false,
          temperature:  { type: Number, default: 0},
          humidity: { type: Number, default: 0},
          pressure: {type: Number, default: 0},
          wind_speed: {type: Number, default: 0},
          description: {type: String, default: ""},
          date: {type: Number, default: Date.now()}
           }]
});
const Farmland = module.exports = mongoose.model('Farmland', FarmlandSchema);


//-------------------------Admin service ApI---------------

// Add new farmland by a new user
module.exports.addFarmland = (newFarmland, callback) => {
  newFarmland.save(callback);
};

// getting afarmalnds by farmland id
module.exports.getFarmlandByID = (farmalnd_id, callback) => {
  Farmland.find({_id: farmalnd_id}, callback);
};

  // update basic farmland information by admin
module.exports.updateBasicFarmlandInfo = (farmand_id, updating_info, callback) => {
  Farmland.findByIdAndUpdate(farmand_id, { $set: updating_info}, { new: true }, callback);
  };
module.exports.deleteFarmland = (farmland_id, callback) =>{
 Farmland.findByIdAndDelete(farmland_id,callback);
};

//------------------------- Guest service ApI---------------
// getting all un hired farmalnds
module.exports.getAllUnhiredFarmlands = callback => {
  Farmland.find({ownedBy: null}, callback);
};

// Searching farmalnds by location
module.exports.getFarmlandByLocation = (location, callback) => {
  Farmland.find({ physical_address: location  } , callback);

};
// Updating a farmland on hiring
module.exports.hireFarmland = (farmland_id, user_id, callback) => {
  console.log('----- '+ user_id)
  Farmland.findByIdAndUpdate(farmland_id , { $set: { ownedBy: user_id} }, { new: true }, callback);
};
//------------------------- User service ApI---------------

// Getting user's farmland 
module.exports.getUserFarmland =(user, callback) => {
  Farmland.find({ownedBy: user}, callback);
};

//  Getting users farmlands the whole status
module.exports.userFarmlandStatus = (farmland_id, callback) => {
  Farmland.findById(farmland_id, {_id: 0, embedded_system:1, }, callback);
};

// getting Feedback System
// module.exports.getSystemFeedback = () => {}


//------------------------- Embedded system Service---------------

// data from embedded A
// module.exports.appendFarmlandSensorData = (farmland, data, callback) => {
//   Farmland.findById(farmland, {latitude:1, longitude:1}, (err, response ) => {
//     if(err)  throw err;
//     if(!response)  {response.json({succses: false, msg:'No farmland in this location exists'});}
//     else if(data.latitude != response.latitude || data.longitude !== response.longitude){
//       {response.json({succses: false, msg:"Farmland and Sensor location didn't match"});} // server igonres an authenticated sensor data
//     }
//     else {
//       Farmland.findByIdAndUpdate(farmland, { $push: { embedded_system: data } }, { new: true }, callback);
//      }
//   }); };

//................ Saving enviromental weather from national weather service..................

// Get farmland for weather update 
module.exports.allFarmlands = callback => {
  Farmland.find({}, {'location.latitude': 1,'location.longitude': 1}, callback);
  };

  // Update farmland data
module.exports.updateWeather = (farmland_id, weather, callback ) => {
  Farmland.findByIdAndUpdate(farmland_id, { $push: { enviromental_weather: weather }}, callback);
  };






















