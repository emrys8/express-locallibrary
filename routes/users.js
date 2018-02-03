var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.render('cool', { name: 'Ndidi', message: 'You are awesome!' });
})

router.get('/profile', function(req, res, next) {
  res.send('here is your profile page!');
});

module.exports = router;
