'user strict';

const 
      express = require('express'),
      request = require('request'),
      router = express.Router(),
      Farmland = require('../model/farmland');
      User = require('../model/user');
      Crop = require('../model/crop');

      var current_datetime = new Date();
      const now =  current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear();



//-------------------------Admin service ApI----------------------------
// Add new Farmland
router.post('/admin/add-farmland', (req, res, next) => {
        const newFarmland = new Farmland({
        farmland_area: Number(req.body.farmland_area),
        farmland_experiance: req.body.farmland_experiance,
        farmland_description: req.body.farmland_description,
        soil_type: req.body.soil_type,
        physical_address: req.body.physical_address,  
        latitude: Number(req.body.latitude),
        longitude: Number(req.body.longitude)     
        });
        // console.log(newFarmland);
        Farmland.addFarmland(newFarmland, (err, farmland) => {
          if(err) throw err;
           if(!farmland)
            res.json({ success: false, msg:'Failed to register Farmland'});
           else { res.json({success: true, msg:'Farmland registered', farmalnd: farmland
            });
          }
        });
      });

 // Searching Farmalnd by ID
router.get('/admin/:id', (req, res ) => {
  const farmalnd_id = req.params.id;
  Farmland.getFarmlandByID(farmalnd_id, (err, farmland) => {
    if (err) throw err
        else {
         // console.log(farmland);
          res.send(farmland);}
})
});   

// Update Farmland basic informaion 
router.put('/admin/:id', (req, res) => {
  const 
      farmland_id = req.params.id,
      updating_info= req.body.newFarmlandInfo;
   
Farmland.updateBasicFarmlandInfo(farmland_id, updating_info, (err, updated) => {
  if(err) throw err;
 res.json({msg: "Farmland updated Successfully", data: updated});
  }); 
});

// Deleting Farmland
router.delete('/admin/delete/:id',(req, res) => {
  const farmalnd_id = req.params.id;
  Farmland.deleteFarmland(farmalnd_id, (err, farmland) => {
    if(err) throw ` Unable to delet  farmland with id ${farmalnd_id}`;
    if(!farmland) throw `User ${farmalnd_id} didn't found`;
    else { res.json({mesg: `Farmland ${farmalnd_id}  deleted successfully`});}
  });
});


//------------------------- Guest service ApI----------------------------

// Geting all farmland which is not hired
router.get('/guest', (req, res) => {
  Farmland.getAllUnhiredFarmlands((err, farmlands) => {
    if (err) throw err
 //console.log(farmlands);
         else {res.json(farmlands);}
});
});

 //Search Farmland by physical location 
 router.get('/guest/:location', (req, res) => {
  const location = req.params.location;
  Farmland.getFarmlandByLocation(location, (err, farmland) => {
    if (err) throw err;
      else {res.send(farmland);}});
});  

// Hire the farmland by guest user
router.put('/guest/:id/:user_id', (req, res) => {
  const 
     farmland_id = req.params.id,
     user = req.params.user_id;
      //  console.log(`${user} and ${farmland_id}`);
Farmland.hireFarmland(farmland_id, user, (err, farmlandUpdated) => {
  if(err) throw err;
  if(!farmlandUpdated) {res.json({success: false, msg: 'Opps something wrong while hiring the farmland'});
   } else {
  User.findByIdAndUpdate(user , { $push: {userID: 1, farmland_owned: farmland_id} }, { new: true }, (err, userUpdated) => {
    if(err) throw err;
    if(!userUpdated) {res.json({success: false, msg: 'Opps something wrong while hiring the farmland'});
     } else {
      const notification = `A farmer with passport ID ${user.userID} hired the farmland ${farmland_id} on ${now}`;
       User.update({username: 'admin'}, {$push: {notification: notification}}, (err, add) => {
        if (err) throw err;});
       res.json({success: false, msg: "Farmland hired Successfully"});}
  });} });
 });


//------------------------- User Service API ----------------------------
// getting users hires farmland
router.get('/user/:user_id', (req, res ) => {
  const user = req.params.user_id;
Farmland.getUserFarmland(user, (err, myFarmland) => {
  if(err) throw err;
  res.json(myFarmland);
});
});

// Getting status for a particular users's farnland
// router.get('/user/status/:id', (req, res ) => {
//   farmland_id = req.params.id;
//  Farmland.userFarmlandStatus(farmland_id, (err, farmland_status ) => {
// if(err) throw err;
// res.json({status: farmland_status});
//  });
// });

// // Getting system feedback
// router.get('/user/feedback/:id', (req, res ) => {
//   farmland_id = req.params.id;
//   Farmland.getSystemFeedback(farmland_id, (err, fb ) => {
//     if(err) throw err;
//     res.json({feedback: fb});
//   });
// });
//................ Update farmland's sensor data................

//  get farmland data from embedded system and append it the array
router.post('/sensor', (req, res) => {

  const current_datetime = new Date();
   const 
        farmland = req.body.famlandID,                // req.params.id,
        data = {
          soil_temprature: req.body.soil_temprature,
          soil_moisture: req.body.soil_moisture,
          soil_phLevel: req.body.soil_phLevel,
          light_intensity: req.body.light_intensity,
          motor_on: req.body.motor_on,
          measured_at: current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
        },
        location = {
          latitude: req.body.latitude,
          longitude: req.body.longitude
            };
            let farmlandOwner = "zele_12" ;
  //  console.log(`${farmland}, ${data} , ${data.soil_moisture}`);
  Farmland.findById(farmland, {_id:0,latitude:1,longitude:1, ownedBy:1}, (err, response ) => {
    if(err)  throw err;
    if(!response)  throw 'No farmland in this location exists';
    else if(location.latitude != response.latitude || location.longitude !== response.longitude){
      { throw "Farmland and Sensor location didn't match";} // server igonres an authenticated sensor data
    } 
    User.findById(response.ownedBy, {_id: 0, username: 1}, (err, owner) => {
      farmlandOwner = owner.username}); });
    Farmland.findByIdAndUpdate(farmland, { $push: { embedded_system: data }}, { new: true }, (err, update) => {
        if(err) throw err;
        if(!update) throw 'Unable return the updated data'});
        Farmland.findById(farmland, {_id: 0,embedded_system:1, enviromental_weather:1,embedded_system_avg:1,enviromental_weather_avg:1}, (err, farmUpdated ) => {
          if(err) throw err;
          if(!farmUpdated) throw 'Something Gone Wrong' ;
      var  
        soil_tempratureT = 0 ,
        soil_moistureT  = 0,
        soil_phLevelT = 0,
        light_intensityT = 0,
        countS = 0;

    if(farmUpdated.embedded_system.length != 0){
        for( let emb of farmUpdated.embedded_system) {
          soil_tempratureT += emb.soil_temprature;
          soil_moistureT += emb.soil_moisture;
          soil_phLevelT += emb.soil_phLevel;
          light_intensityT += emb.light_intensity;
          countS +=1;
        } 
    }else count = 1;
const avgSenosr = {
  soil_temprature_avg: soil_tempratureT/countS,
  soil_moisture_avg :soil_moistureT /countS,
  soil_phLevel_avg :soil_phLevelT/countS,
  light_intensity_avg: light_intensityT/countS  
};
//console.log(avgSenosr);
var  
temperatureE = 0,
humidityE  = 0,
pressureE =  0,
wind_speedE = 0,
countE = 0;
if(farmUpdated.enviromental_weather.length != 0){
for( let env of farmUpdated.enviromental_weather) {
  temperatureE  += env.temperature;
  humidityE += env.humidity;
  pressureE  += env.pressure ;
  wind_speedE += env.wind_speed; 
  countE +=1;
}} else  countE = 1;
const environment = {
  temperature_avg: temperatureE/countE,
  humidity_avg : humidityE/countE,
  pressure_avg : pressureE/countE,
  wind_speed_avg: wind_speedE/countE  
};
 //console.log(environment);
Farmland.findByIdAndUpdate(farmland, { $set: { enviromental_weather_avg: environment, embedded_system_avg: avgSenosr}}, { new: true }, (err, avg_update) =>{
  if(err) throw err;
  if(!avg_update) throw 'err in calculating the avarige data';});
    //find the recommondded crop 
    Farmland.findById(farmland, {_id: 0,embedded_system_avg:1}, (err, farmland4CropSug) =>{
      if(err) throw err;
      if(!farmland4CropSug) throw 'Something gone wrong';
      Crop.find({}, {_id:0,crop_name:1, 'soil_condition.temprature':1,'soil_condition.moisture':1,
      'soil_condition.light_intensity':1, 'soil_condition.Ph_level':1}, (err, crops) => {
        if(err) throw err;
        if(!crops) throw 'No crop data'; 
          for (let crop of crops){
      if (
        (crop.soil_condition.temprature-15 <= farmland4CropSug.embedded_system_avg.soil_temprature_avg && crop.soil_condition.temprature+15 >= farmland4CropSug.embedded_system_avg.soil_temprature_avg)|| 
        (crop.soil_condition.moisture-25 <= farmland4CropSug.embedded_system_avg.soil_moisture_avg && crop.soil_condition.moisture+25 >= farmland4CropSug.embedded_system_avg.soil_moisture_avg)||
        (crop.soil_condition.Ph_level-0.2 <= farmland4CropSug.embedded_system_avg.soil_phLevel_avg && crop.soil_condition.Ph_level+0.2 >= farmland4CropSug.embedded_system_avg.soil_phLevel_avg) ||
        (crop.soil_condition.light_intensity-50 <= farmland4CropSug.embedded_system_avg.light_intensity_avg && crop.soil_condition.light_intensity+ 50 >= farmland4CropSug.embedded_system_avg.light_intensity_avg)){
      Farmland.findByIdAndUpdate(farmland, { $addToSet:  { recCrop: crop.crop_name} }, { new: true }, (err, recom) => {
        if(err) throw err;
        if(!recom) {throw err;}
        if (farmland4CropSug.embedded_system_avg.soil_moisture_avg > 50) {
          const notification = "The avarage soil moisture level is bellow the threshold value, please check your water pump if is out of servce";
          User.findOneAndUpdate({username: farmlandOwner}, {$push: {notification: notification}}, (err, notf) => {if(err) throw err;} );}
          if (farmland4CropSug.embedded_system_avg.soil_phLevel_avg < 7) {
            const notification = "The avarage PH lebel level is bellow the threshold value which indicate more acidic, please use some basic chemicals";
            User.update({username: farmlandOwner}, {$push: {notification: notification}});}
          });  }} 
      });
     });
  
}); 

 }) ;

router.get('/get-humidity/:id', (req, res) => {
   Farmland.findById(req.params.id, {enviromental_weather:1}, (err, response ) => {
      if(err)  throw err;
      if(!response) throw `No farmland exixts for farrmland id ${farmland}`;
       const last_weather= response.enviromental_weather.length-1
      console.log(response.enviromental_weather[last_weather].humidity);
      res.json(response.enviromental_weather[last_weather].humidity);
});
});

//---------- Feaching national weather APi ---------

 // updating all farmlnds enviromental weather
const fetchWeather = () => {
  try{
  const apiKey = 'da8124feebc16ba503d23184ba5867a6';
Farmland.allFarmlands((err, farmlands) => {
  if(!farmlands) throw 'There is no farmland in the database';
   else{
    console.log(farmlands);
for (let farmland of farmlands) {
 let lat = farmland.latitude;
 let long = farmland.longitude;
const  url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
request(url, function(err, response, body) {
  if(!body) throw 'No data fetched from API';
   else {
   //  console.log(body);
    const weather = JSON.parse(body);
   // console.log(weather);

     const  weather_data = {
      temperature: weather.main.temp,
      humidity: weather.main.humidity,
      pressure: weather.main.pressure,
      wind_speed: weather.wind.speed,
      description: weather.weather[0].description 
    };   
    console.log(weather_data);
Farmland.updateWeather(farmland._id, weather_data, (err, updated) => {
if(err) throw err;
if(!updated) throw 'Error in updating the farmland';
else {}});
 }});
}}});}
catch(err) {
  console.log(`Some err hapens ${err}`);
}
};
   //setInterval(fetchWeather, 10000);

module.exports = router;