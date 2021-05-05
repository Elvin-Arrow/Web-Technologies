 const mongoose = require('mongoose')
 const courseModel = require('../models/course').model
 const studentModel = require('../models/student')

const dbUrl = "mongodb://localhost:27017/sessional"

module.exports.index = (request, response, next) => {
    response.render('index', { title: 'Express' });
}

module.exports.insertCourse = (request, response, next) => {
    
    mongoose.connect(
        dbUrl,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) throw err;
            

            courseModel.create({name: request.body.name, outline: request.body.outline, creditHours: request.body.creditHours, department: request.body.department}, (err, doc) => {
                if (err) throw err;

                response.end(doc.toString());
            });

        }
    )
}

module.exports.insertStudent = (request, response, next) => {
    mongoose.connect(
        dbUrl,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err) => {
            if (err) throw err;
            

            studentModel.create({name: request.body.name, outline: request.body.outline, creditHours: request.body.creditHours, department: request.body.department}, (err, doc) => {
                if (err) throw err;

                response.end(doc.toString());
            });

        }
    )
}