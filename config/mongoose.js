//requiring mongoose to set up connection with database
const mongoose = require('mongoose');

//setting up connection
mongoose.connect('mongodb://localhost:27017/tasks_db', {useNewUrlParser: true, useUnifiedTopology: true});

//to check if the connection is successful or some error occured
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error setting up connection wiht database"));
db.once('open', function() {
    console.log("Connection with database is successful");
});
