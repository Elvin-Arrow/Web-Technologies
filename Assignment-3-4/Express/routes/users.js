var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', (req, res, next) => {
  let username = req.params.username;
  let password = req.params.password;

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
