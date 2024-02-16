var express = require('express');
var router = express.Router();
const adminController = require('../controllers/adminController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',adminController.login)

router.post('/login',adminController.loginTo)

router.get('/home',adminController.home)

router.post('/add-word',)

router.post('/add-sentence',)



module.exports = router;
