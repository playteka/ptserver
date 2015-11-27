var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
           res.render('index', { title: 'Keke' });
           });

router.get('/bmw', function (req, res) {
           res.send('hello,world!');
           });

router.get('/reg', function (req, res) {
           res.render('reg', { title: '注册' });
           });
router.post('/reg', function (req, res) {
            });




router.get('/post', function (req, res) {
           res.render('post', { title: '发表' });
           });
router.post('/post', function (req, res) {
            });



module.exports = router;