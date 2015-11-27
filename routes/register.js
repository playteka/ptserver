var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Subscriber = require('../db/schema.js').Subscriber;



// register a new subscriber
router.post('/', function(req, res) {
            var sess = req.session;
            var sid = req.sessionID;
            var account = req.body.account;
            var password = req.body.password;
            var ret = {};
            
            if (password.length < 6) {
            ret.status = "error";
            ret.errorno = 6;  //"password must be no less than 6 character"
            res.json(ret);
            }
            
            Subscriber.findOne({'account': account}, function (err, subscriber) {
                               if (err) return handleError(err);
                               
                               if (subscriber) {
                               ret.status = "error";
                               ret.errorno = 1;  //"User name already exists"
                               res.json(ret);
                               }
                               else{
                               var newsub = new Subscriber(req.body);
                               newsub.save(function(err,user){
                                           if(err) return handleError(err);
			
                                           //save account and _id
                                           sess.account = user.account;
                                           sess._id = user._id;
                                           sess.save();
										   
                                           //return success
                                           ret.status = "success";
                                           ret.body = user;
                                           res.json(ret);
                                           });
                               }
                               });
            });

module.exports = router;
