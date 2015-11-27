var express = require('express');
var router = express.Router();

//var mongoose = require('mongoose');
//var Subscriber = require('../db/schema.js').Subscriber;

router.post('/', function (req, res) {
            var sess = req.session;
            
            //clear account and _id
            sess.account = null;
            sess._id = null;
            sess.save();
            
            //return success
            var ret = {};
            ret.status = "success";
            res.json(ret);
            });

module.exports = router;