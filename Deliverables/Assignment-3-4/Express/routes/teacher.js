var express = require('express');
var router = express.Router();
var Assignment = require('../models/assignment');
const Quiz = require('../models/quiz');
const QuizSubmission = require('../models/quiz_submission');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('This is the teacher router');
});


/*View Assignments*/

router.get('/assignments', function (req, res, next) {
    Assignment.find({}).sort('title').exec(function (error, results) {
        if (error) {
            return next(error);
        }
        console.log("viewing assingment");
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

router.get('/quizSubmissions', (req, res, next) => {
    QuizSubmission.find({}).populate('quiz').populate('student').exec((err, results) => {
        if (err) return next(err);

        console.log(results);
        res.json(results);
    });
});

/* Add Assignment */

router.post('/addAssignment', function (req, res, next) {
    Assignment.create(req.body).then(
        (assignment) => {
            console.log("Assignment has been added", assignment);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(assignment);
        }, (err) => next(err))
        .catch((err) => next(err));
});

router.post('/addQuiz', (req, res, next) => {
    console.log(req.body);
    Quiz.create(req.body).then(quiz => {
        console.log("Assignment has been added", quiz);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(quiz);
    }, (err) => next(err)).catch(err => next(err));
});

router.delete('/delquiz/:qid', function (req, res, next) {
    Quiz.deleteOne({ _id: req.params.sid }), function (error, results) {
        if (error) {
            return next(error);
        }
        res.json(results);
    }
});


module.exports = router;
