//requiring mongoose
const mongoose = require('mongoose');

//creating the schema for the document of collection
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

//compiling our schema into a model (a class for interacting with MongoDB) (an instance of model is called a document)
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;