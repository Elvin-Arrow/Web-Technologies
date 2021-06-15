
var mongoose = require('mongoose');
var schema = mongoose.Schema;
var quizSchema = new schema({
    title: String,
    score: Number,
    questions: {
        type: [],
    }
});
module.exports = mongoose.model('Quiz', quizSchema);