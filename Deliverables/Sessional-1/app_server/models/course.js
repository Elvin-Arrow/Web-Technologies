const mongoose = require('mongoose')

const Schema = mongoose.Schema

const courseSchema = new Schema(
    {
        name: {
            type: [String], index: true
        },
        outline: String,
        creditHours: Number,
        department: String        
    }
)

module.exports.schema = courseSchema
module.exports.model = mongoose.model("Course", courseSchema)
