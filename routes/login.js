

var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Subscriber = require('../db/schema.js').Subscriber;

router.get('/', function (req, res) {
           var resource={};
           resource.redirect = 'NO';
           resource._id = '0';
           
           if (req.query.redirect) {
           resource.redirect = req.query.redirect;
           }
           
           if (req.query._id) {
           resource._id= req.query._id;
           }
           
           //load the language assets
           if (req.query.lang == "cn") {
           var lang = require("../public/login/lang/login_cn.json");
           }
           else{
           var lang = require("../public/login/lang/login_en.json");
           }
           resource.lang = lang;
           
           
           res.render('login', resource);
           });

router.post('/', function (req, res) {
            var sess = req.session;
            var sid = req.sessionID;
            var account = req.body.account;
            var password = req.body.password;
            var ret = {};
            
            Subscriber.findOne({ 'account': account, 'password' : password }, function (err, subscriber) {
                               if (err) return handleError(err);
                               if (subscriber) {
                               if (subscriber.active == "1") {
                               //save account and _id
                               sess.account = subscriber.account;
                               sess._id = subscriber._id;
                               sess.save();
                               
                               //return success
                               ret.status = "success";
                               ret.error = "login successfully";
                               //ret.session = sess;
                               //ret.sid = sid;
                               res.json(ret);
                               //res.end();
                               }
                               else{ //subscriber is not active
                               ret.status = "error";
                               ret.error = "subscriber is inactive";
                               res.json(ret);
                               }
                               }
                               else{  //user name or password wrong
                               ret.status = "error";
                               ret.error = "User name does not exist or password wrong";
                               res.json(ret);
                               }
                               });
            });


module.exports = router;