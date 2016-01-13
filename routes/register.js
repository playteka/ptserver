var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Subscriber = require('../db/schema.js').Subscriber;


//check the email format
function isemail(email) { 
    try {
        if (email.search(/^w+((-w+)|(.w+))*@[a-za-z0-9]+((.|-)[a-za-z0-9]+)*.[a-za-z0-9]+$/) != -1) 
        { 
            return true; 
        }else{ 
            return false; 
        } 
    } catch (error) {
        Console.log(error);
    }

} 


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
            
            if(!isemail(account)){
                ret.status = 'error';
                ret.errorno = 7 //the account is not in email format
                ret.json(ret);
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
