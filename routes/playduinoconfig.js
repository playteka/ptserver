var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Subscriber = require('../db/schema.js').Subscriber;
var PlayduinoProject = require('../db/schema.js').PlayduinoProject;

router.get('/', function (req, res) {
           var sess = req.session;
           if (!sess.account) {
           res.redirect('/login');  //if not login, redirect to login page
           };
           var resource={};
           resource._id = req.query._id;
           
           if (req.query.lang == "cn") {
           var lang = require("../public/playduinoconfig/lang/playduinoconfig_cn.json");
           }
           else{
           var lang = require("../public/playduinoconfig/lang/playduinoconfig_en.json");
           }
           resource.lang = lang;
           resource.account = sess.account;
           
           res.render('playduinoconfig.ejs', resource);
           });

router.get('/getdata', function(req, res){
           var sess = req.session;
           var account = sess.account;
           var _id = req.query._id;
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
                                    
                                    
                                    if(project.active == '0'){
                                    ret.status = "error";
                                    ret.errorno = 3;  //project has been deleted
                                    res.json(ret);
                                    }
                                    
                                    if (project.account != sess.account) {
                                    ret.status = "error";
                                    ret.errorno = 4;  //no rights to view private program of other user
                                    res.json(ret)
                                    }
                                    
                                    ret.status = 'success';
                                    ret.errorno = 0;  //subscriber edit his own program
                                    ret.project_name = project.project_name;
                                    ret.ipaddress = project.ipaddress;
                                    ret.published = project.published;
                                    res.json(ret);
                                    });
           });


router.post('/update', function (req, res, next) {
            var sess = req.session;
            var account = sess.account;
            var _id = req.body._id;
            
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
                                     
                                     if (req.body.project_name != null) {
                                     project.project_name = req.body.project_name;
                                     }
                                     
                                     if (req.body.ipaddress != null) {
                                     project.ipaddress = req.body.ipaddress;
                                     }
                                     
                                     if (req.body.published != null) {
                                     project.published = req.body.published;
                                     }
                                     
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

var tree = [];
function buildTree(_id, finish){
    
    // if _id is null, it means previous project is a root project 
    if (_id == null) return finish();
    
    //find the project
    PlayduinoProject.findOne({ '_id': _id }, function (err, project) {
                             
                             if (err) return finish();  // DB error, end the tree building
                             if (!project) return finish(); //project does not exist, end the tree building
                             
                             //push the porject into the tree
                             tree.push({'_id':_id, "project_name":project.project_name, "account":project.account, 
                                       "date_created":project.date_created});
                             
                             //nested call buildTree to find parent project
                             buildTree(project.fork_from, finish);
                             });
}

router.post('/forktree', function(req, res, next){
            var sess = req.session;
            var account = sess.account;
            var _id = req.body._id;
            
            var ret = {};
            
            if (!account) {
            ret.status = "error";
            ret.errorno = 1;  //not yet logged in
            res.json(ret);
            }    
            
            tree.length = 0;
            buildTree(_id, function(){
                      ret.status = "success";
                      ret.errorno = 0;
                      ret.body = tree;
                      res.json(ret);
                      });
            
            });

module.exports = router;