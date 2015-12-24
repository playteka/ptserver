var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Subscriber = require('../db/schema.js').Subscriber;
var PlayduinoProject = require('../db/schema.js').PlayduinoProject;

router.get('/', function (req, res) {
           if (!req.query._id) {
           res.redirect('/login');  //if no project id, then go to login page
           };
           
           var sess = req.session;
           var resource={};
           resource._id = req.query._id;
           
           if (req.query.lang == "cn") {
           var lang = require("../public/blockly/app/playduino/lang/playduino_cn.json");
           }
           else{
           var lang = require("../public/blockly/app/playduino/lang/playduino_en.json");
           }
           resource.lang = lang;
           resource.account = sess.account;
           resource.isLogin = resource.account == null ? false:true;
           
           res.render('playduino.ejs', resource);
           });


router.post('/download', function (req, res) {
            var sess = req.session;
            var account = sess.account;
            var _id = req.body._id;
            var ret = {};
            
            PlayduinoProject.findOne({ '_id': _id }, function (err, project) {
                                     if (err){
                                     res.json(err);
                                     return next(err);
                                     }
                                     if (!project) {
                                     ret.status = "error";
                                     ret.errorno = 2;  //project does not exist
                                     res.json(ret);
                                     }
                                     else{
                                     
                                     if(project.active == '0'){
                                     ret.status = "error";
                                     ret.errorno = 3;  //project has been deleted
                                     res.json(ret);
                                     }
                                     
                                     if (project.account != sess.account) {
                                     
                                     if (project.published == '0') { //program is private
                                     ret.status = "error";
                                     ret.errorno = 4;  //no rights to view private program of other user
                                     res.json(ret)
                                     }
                                     else {  //program is public
                                     if (!account) {
                                     ret.status = "readonly";
                                     ret.errorno = -1;  //program is public but not yet logged in
                                     ret.project_name = project.project_name;
                                     ret.ipaddress = project.ipaddress;
                                     ret.xml_code = project.xml_code;
                                     res.json(ret);
                                     }
                                     else{
                                     ret.status = 'readonly';
                                     ret.errorno = -2;  //program is public and it belongs to others
                                     ret.project_name = project.project_name;
                                     ret.ipaddress = project.ipaddress;
                                     ret.xml_code = project.xml_code;
                                     res.json(ret);
                                     }
                                     }
                                     }
                                     else{
                                     ret.status = 'readwrite';
                                     ret.errorno = 0;  //subscriber edit his own program
                                     ret.project_name = project.project_name;
                                     ret.ipaddress = project.ipaddress;
                                     ret.xml_code = project.xml_code;
                                     res.json(ret);
                                     }
                                     }
                                     });
            });

router.post('/upload', function (req, res, next) {
            var sess = req.session;
            var account = sess.account;
            var _id = req.body._id;
            var xml_code = req.body.xml_code;
            var ret = {};
            
            if (!account) {
            ret.status = "error";
            ret.errorno = 1;  //not yet logged in
            res.json(ret);
            }
            
            PlayduinoProject.findOne({ '_id': _id }, function (err, project) {
                                     if (err){
                                     res.json(err);
                                     return next(err);
                                     }
                                     if (!project) {
                                     ret.status = "error";
                                     ret.errorno = 2;  //project does not exist
                                     res.json(ret);
                                     }
                                     else{
                                     if(project.active == '0'){
                                     ret.status = "error";
                                     ret.errorno = 3;  //project has been deleted
                                     res.json(ret);
                                     }
                                     
                                     if (project.account != sess.account) {
                                     ret.status = "error";
                                     ret.errorno = 4;  //no rights to modify program of other user
                                     res.json(ret);
                                     };
                                     
                                     // update XML code
                                     project.xml_code = xml_code;
                                     project.date_modified = new Date();
                                     
                                     project.save(function(err) {
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

router.post('/fork', function (req, res, next) {
            var sess = req.session;
            var account = sess.account;
            var _id = req.body._id;
            var project_name = req.body.project_name;
            var ret = {};
            
            if (!account) {
            ret.status = "error";
            ret.errorno = 1;  //not yet logged in
            res.json(ret);
            }
            
            PlayduinoProject.findOne({ '_id': _id }, function (err, project) {
                                     if (err){
                                     res.json(err);
                                     return next(err);
                                     }
                                     if (!project) {
                                     ret.status = "error";
                                     ret.errorno = 2;  //project does not exist
                                     res.json(ret);
                                     }
                                     else{
                                     if(project.active == '0'){
                                     ret.status = "error";
                                     ret.errorno = 3;  //project has been deleted
                                     res.json(ret);
                                     }
                                     
                                     if (project.published != '1' && project.account != account) {
                                     ret.status = "error";
                                     ret.errorno = 4;  //no rights to fork private program of other users
                                     res.json(ret);
                                     };
                                     
                                     PlayduinoProject.create({ 'account':account, 'project_name':project_name, 'xml_code':project.xml_code, "fork_from":_id}, 
                                                             function (err, fork_project) {
                                                             if (err){
                                                             res.json(err);
                                                             return next(err);
                                                             } 
                                                             
                                                             ret.status = "success";
                                                             ret.errorno = 0;
                                                             ret._id = fork_project._id;
                                                             res.json(ret);
                                                             });
                                     
                                     }
                                     });
            });

module.exports = router;