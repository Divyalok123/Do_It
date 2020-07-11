
/* for different colors in category buttons */
var buttons = document.getElementsByClassName("categ-button");
for (let a of buttons) {
	if (a.innerHTML == "Work") {
		a.style.backgroundColor = "#2cbb8a";
	} else if (a.innerHTML == "College") {
		a.style.backgroundColor = "#eb598d";
	} else if (a.innerHTML == "Home") {
		a.style.backgroundColor = "#705d5d";
	} else if (a.innerHTML == "Group") {
		a.style.backgroundColor = "#eb2d52";
  	} else if (a.innerHTML == "Personal") {
		a.style.backgroundColor = "#2c95e6";
	}
  
  if(a.innerHTML.length == 0) {
    a.style.visibility="hidden";
  }
}

/* just a check */
var deletebutton = document.getElementById("delete");
deletebutton.addEventListener('click', function() {
	var checks = document.querySelectorAll('.list-item input[type="checkbox"]');
	for(let a in checks) {
		console.log(a);
	}
});
