const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/crudDb', { useNewUrlParser: true })

const Schema = mongoose.Schema

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    hobby: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Student', studentSchema)