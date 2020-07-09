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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
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

app.post("/new-task", function (req, res) {
	console.log(req.body);

	const task = new Task({
        title: req.body.title,
        due_date: dateformat(req.body.date, "mmmm, d, yyyy"),
        category: req.body.category
    });
	task.save();
	res.redirect("back");
});

app.get("/delete-task", function(req, res){
    console.log(req.body);

    
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
