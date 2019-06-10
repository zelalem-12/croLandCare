'user strict';
const 
        express = require('express'),
        path = require('path'),
        bodyParser = require('body-parser'),
        cors = require('cors'),
        passport = require('passport'),
        mongoose = require('mongoose'), 

        config = require('./config/database');

// Connect To Database
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, {useNewUrlParser: true, promiseLibrary: require('bluebird') })
  .then(() => console.log(`Connected to database ${config.database}`))
  .catch((err) => console.log(`Database error: ${err}`));
  
const 
        port = process.env.PORT || 8080,
        app = module.exports = express(),
        User = require('./route/user'), 
        Farmland = require('./route/farmland'),
        Crop = require('./route/crop');
        Contact = require('./route/contact');

// CORS Middleware 
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));
// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// api routes
app.use('/users', User);
app.use('/farmlands', Farmland);
app.use('/crops', Crop);
app.use('/contacts', Contact);

// Start Server
app.listen(port, () => {
  console.log('Server started on port '+port);
});
