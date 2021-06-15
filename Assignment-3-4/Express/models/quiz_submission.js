var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSubmissionSchema = new Schema({
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz'
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    },
    answers: []
});
module.exports = mongoose.model('QuizSubmission', quizSubmissionSchema);