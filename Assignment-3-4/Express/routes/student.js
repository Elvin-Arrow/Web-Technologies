var express = require('express');
var router = express.Router();
var Assignment = require('../models/assignment');
const Quiz = require('../models/quiz');
const QuizSubmission = require('../models/quiz_submission');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('This is the student router');
});

/*View Assignments*/

router.get('/assignments', function (req, res, next) {
  Assignment.find({}).sort('title').exec(function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  });
});

router.get('/quizzes', (req, res, next) => {
  Quiz.find({}).sort('title').exec((err, results) => {
    if (err) return next(err);

    console.log(results);
    res.json(results);
  });
});

/*Submit Assignment*/
router.put('/submitAssignment/ans', function (req, res, next) {
  Class.findOneAndUpdate({ answer: req.params.ans }, function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  }
  )
});

router.post('/submitQuiz', (req, res, next) => {
  console.log(req.body)
  QuizSubmission.create(req.body).then(submission => {
    console.log("Submission recorded", submission);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(submission);
  }, (err) => next(err)).catch((err) => next(err));
});


module.exports = router;