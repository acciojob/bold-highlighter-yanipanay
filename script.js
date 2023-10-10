
function highlight() {
    //Write your code here
	const boldList = document.querySelectorAll("strong");

	for (let elem of boldList) {
		elem.style.color ="green";
	}
}


function return_normal() {
	const boldList = document.querySelectorAll("strong");

    //Write your code here
for (let elem of boldList) {
		elem.style.color ="black";
	}
}
