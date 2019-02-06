const intro = document.getElementById("intro");
const statements = document.getElementById("statements");
const result = document.getElementById("result"); 
const title = document.getElementById("title");
const statement = document.getElementById("statement");
var a = 0;

var answers = [];


function main() {
	intro.style.display = "block";
	statements.style.display = "none";
}

function start() {
	intro.style.display = "none";
	statements.style.display = "block";
	title.innerHTML = subjects[a].title;
	statement.innerHTML = subjects[a].statement;
}

function answer(value) {
	if (a !== subjects.length) {
		// agree
		if (value === 1) {
		answers[a] = 1;
		a++;
		start();
		}
		// disagree 
		else if (value === 2) {
		answers[a] = 2;
		a++;
		start();
		} 
		// none
		else if (value === 3) {
		answers[a] = 3;
		a++;
		start();
		} 
		// skip
		else if (value === 3) {
		a++;
		start();
		} 
	}
}



function back() {
		if (a===0) {
			main();
	} else{
		a--;
		start();
	}
}



