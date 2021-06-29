var express = require('express');
var router = express.Router();
const Class = require('../models/class');
const Teacher = require('../models/teacher');
const Student = require('../models/student');


/* GET routes */
router.get('/', function(req, res, next) {
  res.send('This is admin rounter');
});

router.get('/classes', function(req, res, next) {
    Class.find({}).populate('teacher').populate('students.sid').exec((err, result) => {
        if (err) {
            return next(err);
        }

        res.json(result);
    })
})

router.get('/classes/:cid', function(req, res, next) {
    Class.findById(req.params.cid).populate('teacher').populate('students.sid').then((result) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json')
        res.json(result)
    }, (err) => next(err)).catch((err) => next(err))
})

router.get('/students', function(req, res, next) {
    Student.find({}).sort('name').exec((err, result) => {
        if (err) return next(err);

        res.json(result);
    });
})

router.get('/students/:sid', function(req, res, next) {
    Student.findById(req.params.sid).then((student) => {
        res.statusCode = 200;
        res.setHeader('content-type', 'application/json')
        res.json(student)
    }, (err) => next(err)).catch((err) => next(err))
})

router.get('/teachers', function(req, res, next) {
    Teacher.find({}).sort('name').exec((err, result) => {
        if (err) return next(err);

        res.json(result);
    });
})

router.get('/teachers/:tid', function(req, res, next) {
    res.send('Information of a speciic teacher');
})
/* POST Routes */
router.post('/addteacher', function(req, res, next) {
    
    Teacher.create(req.body).then((teacher) => {
        console.log('Teacher added', teacher)
        res.statusCode = 200;

        res.setHeader('Content-Type', 'application/json')
         
        res.json(teacher);
    }, (err) => next(err)).catch((err) => next(err))
})

router.post('/addclass', function(req, res, next) {
    Class.create(req.body).then((result) => {
        console.log('Class added', result)
        res.statusCode = 200;

        res.setHeader('Content-Type', 'application/json')
         
        res.json(result);
    }, (err) => next(err)).catch((err) => next(err))
})

router.post('/addstudent', function(req, res, next) {
    Student.create(req.body).then((student) => {
        console.log('Student added', student)
        res.statusCode = 200;

        res.setHeader('Content-Type', 'application/json')
         
        res.json(student);
    }, (err) => next(err)).catch((err) => next(err))
})

/* Put routes */
router.put('/class/:cid/student/:sid', function(req, res, next) {
    Class.findOneAndUpdate(
        {
            _id:req.params.cid
        }, 
        {
            "$push": {
                "students": {
                    "sid": req.params.sid
                }
            }
        },
        {
            new: true,
            upsert: false

        }, (err, result) => {
            if (err) return next(err);

            res.json(result)
        }
        )
})

router.put('/class/:cid/teacher/:tid', function(req, res, next) {
    res.send('Assigning a new teacher to a specific class');
})

router.put('/class/:cid/', function(req, res, next) {
    res.send('Editing a specific class');
})

/* Delete routes */
router.delete('/delclass/:cid/', (req, res, next) => {
    Class.deleteOne({_id: req.params.cid}, (err, result) => {
        if (err) return next(err);

        res.json(result)
    })
})

router.delete('/delteacher/:tid/', (req, res, next) => {
    Teacher.deleteOne({_id: req.params.cid}, (err, teacher) => {
        if (err) return next(err);

        res.json(teacher)
    })
})

router.delete('/delstudent/:sid/', (req, res, next) => {
    Student.deleteOne({_id: req.params.sid}, (err, student) => {
        if (err) return next(err);

        res.json(student)
    })
})

module.exports = router;
