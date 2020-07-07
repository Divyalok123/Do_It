//requiring express
const express = require('express');

//setting up the port
const port = 1111;

//this module provides a way to work with directories and file paths
const path = require('path');

//requiring configuration for setting up the database to be accessed by mongoose
const db = require('./config/mongoose');

//firing up express
const app = express();



//creating a listener to the specified port
app.listen(port, function(err) {
    if(err) {
        console.log(`Some error occured at port: ${port}
        Please try again later`);

        return;
    }
    console.log("Yay! Server is running at @ port:", port);
});