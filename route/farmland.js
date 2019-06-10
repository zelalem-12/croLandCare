'user strict';

const 
      express = require('express'),
      request = require('request'),
      router = express.Router(),
      Farmland = require('../model/farmland');
      User = require('../model/user');


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
          console.log(farmland);
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
      // console.log(`${user} and ${farmland_id}`);
Farmland.hireFarmland(farmland_id, user, (err, farmlandUpdated) => {
  if(err) throw err;
  if(!farmlandUpdated) {res.json({success: false, msg: 'Opps something wrong while hiring the farmland'});
   } else {
  User.findByIdAndUpdate(user , { $push: { farmland_owned: farmland_id} }, { new: true }, (err, userUpdated) => {
    if(err) throw err;
    if(!userUpdated) {res.json({success: false, msg: 'Opps something wrong while hiring the farmland'});
     } else {res.json({success: false, msg: "Farmland hired Successfully"});}
  });} }); });


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
router.get('/user/status/:id', (req, res ) => {
  farmland_id = req.params.id;
 Farmland.userFarmlandStatus(farmland_id, (err, farmland_status ) => {
if(err) throw err;
res.json({status: farmland_status});
 });
});

// Getting system feedback
router.get('/user/feedback/:id', (req, res ) => {
  farmland_id = req.params.id;
  Farmland.getSystemFeedback(farmland_id, (err, fb ) => {
    if(err) throw err;
    res.json({feedback: fb});
  });
});
//................ Update farmland's sensor data................

//  get farmland data from embedded system and append it the array
router.put('/sensor/:id', (req, res) => {
          const 
                farmland = req.params.id,
                data = req.body;      
        Farmland.appendFarmlandSensorData(farmland, data, (err, data) => {
            if(err) throw err;
            if(data){res.json({success: true, msg:'Data is updated'});}
                }) ;
        });

//---------- Feaching national weather APi ---------

//  updating all farmlnds enviromental weather
const fetchWeather = () => {
  const apiKey = 'da8124feebc16ba503d23184ba5867a6';
Farmland.allFarmlands((err, farmlands) => {
  if (err) throw err
  if(!farmlands) throw 'There is no farmland in the database';
   else{
for (let farmland of farmlands) {
let lat = farmland.latitude;
let long = farmland.longitude;
let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
request(url, function(err, response, body) {
  if(err) throw err;
  if(!body) throw 'No data fetched from API';
   else {
   const weather = JSON.parse(body),
      weather_data = {
      temperature: weather.main.temp,
      humidity: weather.main.humidity,
      pressure: weather.main.pressure,
      wind_speed: weather.wind.speed,
      description: weather.weather[0].description 
    };   
Farmland.updateWeather(farmland._id, weather_data, (err, updated) => {
if(err) throw err;
if(!updated) throw 'Error in updating the farmland';
else {}}); }});}}});};

// setting an interval for api call
setInterval(fetchWeather, 1000*3600);

module.exports = router;