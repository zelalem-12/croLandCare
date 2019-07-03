'user strict';

const 
    express = require('express'),
    router = express.Router(),
    Crop = require('../model/crop');



    // ..........Admin Service API..........

// Addin Crops

router.post('/', (req, res, next) => {

  let newCrop = new Crop({
    crop_name: req.body.crop_name,
    crop_description: req.body.crop_description,
    prefered_soil_type: req.body.prefered_soil_type,
    prefered_season: req.body.prefered_season,
    'soil_condition.temprature': Number(req.body.temprature),
    'soil_condition.moisture': Number(req.body.moisture),
    'soil_condition.light_intensity': Number(req.body.light_intensity),
    'soil_condition.Ph_level': Number(req.body.Ph_level),
    'enviromental_weather.air_temperature': Number(req.body.air_temperature),
    'enviromental_weather.humidity': Number(req.body.humidity)
  });
  console.log(newCrop);
  // Crop.addCrop(newCrop, (err,crop) => {
  //   if(err){
  //     res.json({success: false, msg:'Failed to register a Crop'});
  //   } else {
  //     res.json({success: true, msg:'Crop registered', crop: crop});
  //   }
  // });
});


// ........ Guest Service API ....................

// getting all crops
router.get('/', (req, res) => {
  Crop.getAllCrops((err, crops) => {
    if (err) throw err
         else {
           res.send(crops);
           }
})
});

//  search crop by crop name 
router.get('/:crop_name', (req, res) => {
  const crop_name = req.params.crop_name;
 Crop.findCropByName(crop_name, (err, crops) => {
   if (err) return next(err);
      else 
          res.json({crop: crops});  
         });
     });  
  


module.exports = router;
