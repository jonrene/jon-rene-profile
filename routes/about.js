// handles routing for about page
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('about.pug');
})

// exports router app
module.exports = router;