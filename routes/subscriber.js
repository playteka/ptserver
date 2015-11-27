var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Subscriber = require('../db/schema.js').Subscriber;


router.get('/', function (req, res) {
           var sess = req.session;
           
           //if not login, redirect to login page
           if (sess.account == null || sess._id == null) {
           res.redirect('/login');
           };
           
           //pass _id and account to the subscriber page
           var resource={};
           resource._id = sess._id;
           resource.account = sess.account;
           
           if (req.query.lang == "cn") {
           var lang = require("../public/subscriber/lang/subscriber_cn.json");
           }
           else{
           var lang = require("../public/subscriber/lang/subscriber_en.json");
           }
           resource.lang = lang;
           resource.account = sess.account;
           
           res.render('subscriber.ejs', resource);
           });


router.post('/password', function (req, res, next) {
            var sess = req.session;
            var account = sess.account;
            var _id = sess._id;
            var password = req.body.password;
            var new_password = req.body.new_password;
            
            var ret = {};
            
            if (!_id) {
            ret.status = "error";
            ret.errorno = 1;  //not yet logged in
            res.json(ret);
            }
            
            if (new_password.length < 6) {
            ret.status = "error";
            ret.errorno = 6;  //"new password length is less than 6"
            res.json(ret);
            }
            
            Subscriber.findOne({ '_id': _id }, function (err, subscriber) {
                               if (err){
                               res.json(err);
                               return next(err);
                               }
                               if (!subscriber) {
                               ret.status = "error";
                               ret.errorno = 2;  //subscriber does not exist
                               res.json(ret);
                               }
                               else{
                               if(subscriber.active == '0'){
                               ret.status = "error";
                               ret.errorno = 3;  //subscriber has been deleted
                               res.json(ret);
                               }
                               
                               if (subscriber.account != sess.account) {
                               ret.status = "error";
                               ret.errorno = 4;  //no rights to modify password of other user
                               res.json(ret);
                               };
                               
                               if (subscriber.password != password) {
                               ret.status = "error";
                               ret.errorno = 5;  //password wrong
                               res.json(ret);
                               }
                               
                               subscriber.password = new_password
                               
                               subscriber.save(function(err) {
                                               if (err){
                                               res.json(err);
                                               return next(err);
                                               } 
                                               else{
                                               ret.status = "success";
                                               ret.errorno = 0;  //upload program successfully
                                               res.json(ret);
                                               }
                                               });
                               }
                               
                               });
            });


module.exports = router;


