var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var PlayduinoProject = require('../db/schema.js').PlayduinoProject;
var PlaydrawingProject = require('../db/schema.js').PlaydrawingProject;

router.get('/', function (req, res) {
           var sess = req.session;
           if (!sess.account) {
           res.redirect('/login');
           };
           var resource={};
           if (req.query.lang == "cn") {
           var lang = require("../public/project/lang/project_cn.json");
           }
           else{
           var lang = require("../public/project/lang/project_en.json");
           }
           resource.lang = lang;
           resource.account = sess.account;
           res.render('project', resource);
           });

//list all playduino project
router.get('/playduino', function (req, res, next){
           var sess = req.session;
           var account = sess.account;
           var ret = {};
           
           if (!account) {
           ret.status = "error";
           ret.errorno = 1;  //not yet logged in
           res.json(ret);
           }
           
           PlayduinoProject.find({'account':account, 'active':'1'})
           .select('_id project_name ipaddress published')
           .exec(function(err, project_list){
                 if (err) return handleError(err);
                 ret.status = "success";
                 ret.errorno = 0;
                 ret.body = project_list;
                 res.json(ret);
                 });
           
           });


//Create a new Playduino project
router.post('/playduino', function (req, res, next){
            //res.json(req.body);
            var sess = req.session;
            var account = sess.account;
            var project_name = req.body.project_name;
            var ret = {};
            //res.json(sess);
            
            if (!account) {
            ret.status = "error";
            ret.errorno = 1;  //not yet logged in
            res.json(ret);
            }
            //res.json(sess);
            
            PlayduinoProject.findOne({ 'account': account, 'project_name' : project_name, active:'1' }, function (err, project) {
                                     if (err){
                                     res.json(err);
                                     return next(err);
                                     }
                                     if (project) {
                                     ret.status = "error";
                                     ret.errorno = 4; //project name alreay exists
                                     res.json(ret);
                                     }
                                     else{
                                     PlayduinoProject.create({ 'account': account, 'project_name' : project_name }, function (err, project) {
                                                             if (err){
                                                             res.json(err);
                                                             return next(err);
                                                             }
                                                             
                                                             ret.status = "success";
                                                             ret.errorno = 0;
                                                             ret.body = project;
                                                             res.json(ret);
                                                             });
                                     }
                                     });
            
            });

//deletePlayduino project
router.post('/deleteplayduino', function (req, res, next){
            //res.json(req.body);
            var sess = req.session;
            var account = sess.account;
            var _id = req.body._id;
            var ret = {};
            //res.json(sess);
            
            PlayduinoProject.findOne({"_id":_id, "account":account}, function(err, project) {
                                     if (err){
                                     res.json(err);
                                     return next(err);
                                     } 
                                     
                                     if (!project){
                                     ret.status = "error";
                                     ret.errorno = 1; //couldn't find the project
                                     res.json(ret);
                                     }
                                     else {
                                     // set active to '0'
                                     project.active = '0';
                                     project.date_modified = new Date();
                                     
                                     project.save(function(err) {
                                                  if (err){
                                                  res.json(err);
                                                  return next(err);
                                                  } 
                                                  else{
                                                  ret.status = "success";
                                                  ret.errorno = 0;
                                                  ret.body = project;
                                                  res.json(ret);
                                                  }
                                                  });
                                     }
                                     });
            });


//list all playdrawing project
router.get('/playdrawing', function (req, res, next){
           var sess = req.session;
           var account = sess.account;
           var ret = {};
           
           if (!account) {
           ret.status = "error";
           ret.errorno = 1;  //not yet logged in
           res.json(ret);
           }
           
           PlaydrawingProject.find({'account':account, 'active':'1'})
           .select('_id project_name ipaddress published')
           .exec(function(err, project_list){
                 if (err) return handleError(err);
                 ret.status = "success";
                 ret.errorno = 0;
                 ret.body = project_list;
                 res.json(ret);
                 });
           
           });

//Create a new Playdrawing project
router.post('/playdrawing', function (req, res, next){
            console.log(req.body);
            var sess = req.session;
            var account = sess.account;
            var project_name = req.body.project_name;
            var ret = {};
            console.log(sess);
            
            if (!account) {
            ret.status = "error";
            ret.errorno = 1;  //not yet logged in
            res.json(ret);
            }
            console.log(sess);
            
            PlaydrawingProject.findOne({ 'account': account, 'project_name' : project_name, active:'1' }, function (err, project) {
                                     if (err){
                                     console.log("db error : operation find failed!");
                                     res.json(err);
                                     return next(err);
                                     }
                                     if (project) {
                                     ret.status = "error";
                                     ret.errorno = 4; //project name alreay exists
                                     res.json(ret);
                                     }
                                     else{
                                     PlaydrawingProject.create({ 'account': account, 'project_name' : project_name }, function (err, project) {
                                                             if (err){
                                                             console.log("db error : operation create failed!");
                                                             res.json(err);
                                                             return next(err);
                                                             }
                                                             
                                                             ret.status = "success";
                                                             ret.errorno = 0;
                                                             ret.body = project;
                                                             res.json(ret);
                                                             });
                                     }
                                     });
            
            });


//deletePlaydrawing project
router.post('/deleteplaydrawing', function (req, res, next){
            //res.json(req.body);
            var sess = req.session;
            var account = sess.account;
            var _id = req.body._id;
            var ret = {};
            //res.json(sess);
            
            PlaydrawingProject.findOne({"_id":_id, "account":account}, function(err, project) {
                                     if (err){
                                     res.json(err);
                                     return next(err);
                                     } 
                                     
                                     if (!project){
                                     ret.status = "error";
                                     ret.errorno = 1; //couldn't find the project
                                     res.json(ret);
                                     }
                                     else {
                                     // set active to '0'
                                     project.active = '0';
                                     project.date_modified = new Date();
                                     
                                     project.save(function(err) {
                                                  if (err){
                                                  res.json(err);
                                                  return next(err);
                                                  } 
                                                  else{
                                                  ret.status = "success";
                                                  ret.errorno = 0;
                                                  ret.body = project;
                                                  res.json(ret);
                                                  }
                                                  });
                                     }
                                     });
            });



module.exports = router;
