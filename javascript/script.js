var title = document.getElementById("title");
var statement = document.getElementById("statements");


function main() {
	title.innerHTML = "StemWijzer Tweede Kamer 2017";
	statement.innerHTML = "Test uw politieke voorkeur aan de hand van 30 stellingen";
}


function start() {
	title.innerHTML = "";
	statement.innerHTML = "";
	title.innerHTML = subjects[0].title;
	statement.innerHTML = subjects[0].statement;
}