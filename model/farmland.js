const 
    mongoose = require('mongoose');
    User = require('./user');
    const current_datetime = new Date();
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
  recCrop: [{type: String}],
  embedded_system_avg: { 
    soil_temprature_avg: {type: Number, default: 0},
    soil_moisture_avg: {type: Number, default: 0},
    soil_phLevel_avg: {type: Number, default: 0},
    light_intensity_avg: {type: Number, default: 0},
  },
  enviromental_weather_avg: {
    temperature_avg:  { type: Number, default: 0},
    humidity_avg: { type: Number, default: 0},
    pressure_avg: {type: Number, default: 0},
    wind_speed_avg: {type: Number, default: 0},
     },

  
  embedded_system: [{ 
                        _id: false,
                        soil_temprature: {type: Number, default: 0},
                        soil_moisture: {type: Number, default: 0},
                        soil_phLevel: {type: Number, default: 0},
                        light_intensity: {type: Number, default: 0},
                        motor_on: {type: String, defaultL: "Off"},
                        measured_at:{type: String, default: current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()}
                      }],
  enviromental_weather: [{
          _id: false,
          temperature:  { type: Number, default: 0},
          humidity: { type: Number, default: 0},
          pressure: {type: Number, default: 0},
          wind_speed: {type: Number, default: 0},
          description: {type: String, default: ""},
          date: {type: String, default: current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()}
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
  Farmland.find({_id: farmalnd_id}, {_id: 0, physical_address: 1, ownedBy:1, farmland_area:1}, callback);
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
  Farmland.find({ownedBy: null}, {farmland_area: 1, farmland_experiance:1,farmland_description:1,
    soil_type:1,physical_address:1, latitude:1,longitude:1 }, callback);
};


// Searching farmalnds by location
module.exports.getFarmlandByLocation = (location, callback) => {
  Farmland.find({ physical_address: location  } , callback);

};
// Updating a farmland on hiring
module.exports.hireFarmland = (farmland_id, user_id, callback) => {
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

//................ Saving enviromental weather from national weather service..................

// Get farmland for weather update 
module.exports.allFarmlands = callback => {
  Farmland.find({}, {latitude: 1,longitude: 1}, callback);
  };

  // Update farmland data
module.exports.updateWeather = (farmland_id, weather, callback ) => {
  Farmland.findByIdAndUpdate(farmland_id, { $push: { enviromental_weather: weather}}, callback);
  };