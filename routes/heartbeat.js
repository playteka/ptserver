var express = require('express');
var router = express.Router();

//var mongoose = require('mongoose');
//var PlayduinoProject = require('../db/schema.js').PlayduinoProject;

router.get('/', function (req, res) {
           // break session hash / force express to spit out a new cookie once per second at most
           req.session._garbage = Date();
           req.session.touch();
           
           res.json(req.session);
           });


module.exports = router;