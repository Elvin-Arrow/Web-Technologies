const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String, 
        required: true,
    },
    role: {
        type: String,
        default: ''
    },
    admin: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('User', userSchema)