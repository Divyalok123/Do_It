//requiring mongoose
const mongoose = require('mongoose');

//creating the schema for the document of collection
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    due_data: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        get: value => value.toDateString()
    }
});

//compiling our schema into a model (a class for interacting with MongoDB) (an instance of model is called a document)
const Task = mongoose.model('Task', taskSchema);
module.exports = Task;