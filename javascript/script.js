const title = document.getElementById("title");
const statement = document.getElementById("statements");
var a = 0
var pro = 0
var contra = 0



function start() {
	title.innerHTML = subjects[a].title;
	statement.innerHTML = subjects[a].statement;
}

function agree() {
	a++
	pro++
	start()
}

function disagree() {
	a++
	contra--
	start()
}

function none() {
	a++
	start()
}

function back() {
	a --
	start()
}