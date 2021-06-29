var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res, next) => {
  let username = req.query.username;
  let password = req.query.password;

  console.info(`Username: ${username}\nPassword: ${password}`);

  if (username != null && password != null) {
    if (username == 'admin' && password == '123456') {
      res.json({
        "authenticated": true,
        "user": "admin"
      });
    } else if (username == 'student' && password == '123456') {
      res.json({
        "authenticated": true,
        "user": "student"
      });
    } else if (username == 'teacher' && password == '123456') {
      res.json({
        "authenticated": true,
        "user": "teacher"
      });
    } else {
      res.json({
        "authenticated": false,
        "message": "Bad authentication"
      });
    }
  }
})

module.exports = router;
