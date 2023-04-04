// imports express framework
const express = require('express');

// creates express application and sets its view engine to pug. 
const app = express();
app.set('view engine', 'pug');

// static route to serve static files in public folder. 
app.use('/static', express.static('public'));

// imports routes to be used for project
const homeRoute = require('./routes/index.js');
const aboutRoute = require('./routes/about.js');

// Adds middleware to main application for home routes and about routes
app.use(homeRoute);
app.use('/about', aboutRoute);

// Error handler
app.use((req, res, next) => {
    const err = new Error('Sorry, the requested resource was not found.');
    err.status = 404;
    next(err);
});
   
// global error handler
app.use((err, req, res, next) => {
  if(err.status == 404){
    const errMessage = "Sorry, the requested resource was not found";
    const errStatus = 404;
    res.render("error.pug", {errMessage: errMessage, errStatus: errStatus});
  }else{ 
    res.render("error.pug", {errMessage: "OOPS! Something went wrong.", errStatus: 500})
    console.log("OOPS! Something went wrong.");
    console.log(500);
  }
});

// Starts the application to listen on port 3000
app.listen(3000);
