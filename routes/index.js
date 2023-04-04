// Imports express and router object to handle routing
const express = require('express');
const router = express.Router();

// imports data on projects
const data  = require("../data.json");


// handles home/index route for application
router.get('/', (req, res)=>{
    res.locals.projects = data.projects;
    res.render('index.pug');
})

// handles dynamic routing for each project
router.get('/project/:id', (req, res)=>{
    res.locals.projects = data.projects;
    res.locals.id = req.params.id;
    res.render('project.pug');
})

// exports router app
module.exports = router;