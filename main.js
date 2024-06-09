let submitEl = document.getElementById("submit");
let form = document.getElementById("main-form");
let errorMessageEl = document.getElementsByClassName("error-message");
let isValid = true;
function validateEmail($email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test($email);
}

submitEl.addEventListener("click", (event)=>{
	event.preventDefault();
	let items = [];
	
	items.push( document.getElementById("first-name").value);
	items.push( document.getElementById("last-name").value);
	items.push( document.getElementById("email").value);
	items.push( (document.getElementById("radio-general").checked || document.getElementById("radio-general").checked));
	items.push( document.getElementById("message").value);
	items.push( document.getElementById("checkbox").checked);
	removeError();
	for (let index = 0; index < items.length; index++) {
		if (!items[index] || (index == 2 && !validateEmail(items[index]))){
			isValid = false;
			displayerror(index)
		}
		else
			clearerror(index);
	}
	items.length = 0;
	if (isValid == true){
		form.requestFullscreen()
		document.getElementById("success-message").style.display = 'flex';
	}
})

function removeError(){
	for (let index = 0; index < errorMessageEl.length; index++) {
		errorMessageEl[index].style.display = 'none';
	}
	
}


function clearerror(index){
	let item = "";
	switch (index) {
		case 0:
			item = "first-name"
			break;
		case 1:
			item = "last-name"
			break;
		case 2:
			item = "email"
			break;
		case 4:
			item = "message"
			break;
		case 5:
			item = "checkbox"
			break;
		default:
			break;
	}
	if (item){
		document.getElementById(item).style.outline = 'none';
		document.getElementById(item).style.border = '2px solid var(--Grey_m)';
	}
}



function displayerror(index){
	let item = "";
	switch (index) {
		case 0:
			item = "first-name"
			break;
		case 1:
			item = "last-name"
			break;
		case 2:
			item = "email"
			break;
		case 4:
			item = "message"
			break;
		case 5:
			item = "checkbox"
			break;
		default:
			break;
	}
	if (item){

		document.getElementById(item).style.outline = 'none';
		document.getElementById(item).style.border = '2px solid var(--Red)';
	}
	errorMessageEl[index].style.display = 'block';
	// }
	
}

