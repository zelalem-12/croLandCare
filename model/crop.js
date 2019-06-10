'user strict';

const mongoose = require('mongoose'), config = require('../config/database');

// Crops Schema
const CropSchema = mongoose.Schema({
  crop_name: { type: String, required: true },
  crop_description: {type: String, required:true},
  prefered_soil_type: { type: String, required: true},
  prefered_season: {type: String, required: true},
  soil_condition: {
            temprature: {type: Number, required: true},
            moisture: { type: Number, required: true},
            light_intensity: {type: Number, required: true},
            Ph_level: { type: Number, required: true}
              },

  enviromental_weather: {
         air_temperature: {type: Number, required: true},
         humidity: {type: Number, required: true},
               }
});

/*
crope description
{ingredianets or input to produce
avarage product per hectar
crope usage 
advantage and dissadvantage of th crope
}
*/

const Crop = module.exports = mongoose.model('Crop', CropSchema);


// ........ Admin Service API ..........

// addin crops
module.exports.addCrop = (newCrop, callback) => {
  newCrop.save(callback);
};

// ..................Guest Service API......................
// getting all crops
module.exports.getAllCrops = (callback) => {
  Crop.find({}, callback);
};

module.exports.findCropByName = (crop_name, callback) => {
  Crop.find({crop_name:{ $regex: crop_name, $options: "i" }}, {crop_name:1}, callback);};
