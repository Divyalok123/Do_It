
//requiring express
const express = require("express");

//setting up the port
const port = 1111;

//this module provides a way to work with directories and file paths
const path = require("path");

//requiring configuration for setting up the database to be accessed by mongoose
const db = require("./config/mongoose");

//requiring Task schema/model
//using this we will create entries and populate our collection
const Task = require("./models/task");
const { create } = require("./models/task");

//firing up express
const app = express();

//to format date
const dateformat = require('dateformat');

//setting up view engine and views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//turning on urlencoding to encode/decode the requests
app.use(express.urlencoded({ extended: true }));

//for using static files
app.use(express.static(__dirname + "/assets"));

// let task_list = [
// 	{
// 		title: "College",
// 		due_date: "2012-12-13",
// 		category: "College",
// 	},
// 	{
// 		title: "Home",
// 		due_date: "2012-12-13",
// 		category: "Home",
// 	},
// 	{
// 		title: "Work",
// 		due_date: "2012-12-13",
// 		category: "Work",
// 	},
// 	{
// 		title: "Group",
// 		due_date: "2012-12-13",
// 		category: "Group",
// 	},
// ];

/* to fetch the data when the page is loaded */
app.get("/", function (req, res) {
	Task.find({}, function (err, task) {
		if (err) {
			console.log("Error occured!");
			return;
		}
		return res.render("home", {
			tasks: task,
		});
	});
});

/* to add an item to the list */
app.post("/new-task", function (req, res) {
	console.log(req.body);

	const task = new Task(req.body);
	task.save();
	res.redirect("back");
});

/* to delete list items */
app.post("/delete-task", function(req, res){
	let todelete = req.body.check;
	console.log(todelete);
	/* if the delete button was clicked without selecting any item */ 
	if(todelete == null) {
        console.log("Nothing to delete");
	}
	/* if only one item is selected the req body will be a string */
	else if(typeof(req.body.check) == "string") {
		Task.findByIdAndDelete(todelete, function(err){
			if(err)
				console.log("Error occured while deleting (1 Item");
		});
	}
	/* else it will be a array of string which we will iterate to delete items */
	else {
		for(let x of todelete) {
			Task.findByIdAndDelete(x, function(err){
				if(err)
					console.log(`Error occured while deleting (${x} item)`);
			});
		}
	}
    return res.redirect('back');
});

//creating a listener to the specified port
app.listen(port, function (err) {
	if (err) {
		console.log(`Some error occured at port: ${port}
        Please try again later`);

		return;
	}
	console.log("Yay! Server is running at @ port:", port);
});
