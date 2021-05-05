const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    rollno: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('Student', studentSchema)