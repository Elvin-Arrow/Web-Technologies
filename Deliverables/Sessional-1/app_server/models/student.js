const mongoose = require('mongoose')
const courseSchema = require('./course').schema

const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: String,
    age: Number,
    email: String,
    phoneNumber: Number,
    coursesEnrolled: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }]
});

module.exports = mongoose.model('Student', studentSchema)