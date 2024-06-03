const express = require('express')

const route = express.Router();

route.get('/test', (req, res) => {
    res.status(200).json({massage: 'Welcome to my server'});
})


module.exports = route;