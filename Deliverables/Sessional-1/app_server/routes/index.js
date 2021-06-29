var express = require('express');
var router = express.Router();

const indexController = require('../controllers/index_controller')

/* GET home page. */
router.get('/', indexController.index);

router.post('/insertCourse', indexController.insertCourse);

router.post('/insertStudent', indexController.insertStudent);

module.exports = router;
