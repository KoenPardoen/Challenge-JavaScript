const intro = document.getElementById("intro");
const statements = document.getElementById("statements");
const result = document.getElementById("result");
const title = document.getElementById("title");
const statement = document.getElementById("statement");

var counter = 0;

var answers =[];
const buttonDiv = document.getElementById("buttonDiv");
var allButtons = buttonDiv.getElementsByClassName("btn");

var first = document.getElementById("first")
var second = document.getElementById("second")
var thirth = document.getElementById("thirth")

for (var i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function() {
        answer(event.currentTarget.getAttribute("data-position"))
    });
}


function main() {
    intro.style.display = "block";
    statements.style.display = "none";

}

function getStatement() {
    intro.style.display = "none";
    statements.style.display = "block";
    title.innerHTML = subjects[counter].title;
    statement.innerHTML = subjects[counter].statement;
}

function answer(value) {
    switch (value) {
        case "agree":
            answers[counter] = "pro";
            break;
        case "disagree":
            answers[counter] = "contra";
            break;
        case "none":
            answers[counter] = "none";
            break;
        case "skip":
            answers[counter] = "skip";
    }
   // console.log(answers)
    if (counter == subjects.length -1) {
        getResult();
    } else {
    	counter++
        getStatement();
    }
}

function back() {
	counter--
	getStatement()
}

function getResult() {
	statements.style.display = "none";
    result.style.display = "block";
    for(var i = 0; i < parties.length; i++){
        parties[i].count = 0;
        
       for (let a = 0; a < answers.length; a++) {
           if (answers[a] === subjects[a].parties[i].position) 
           parties[i].count++;
       }
       parties[i].procent = Math.round(100 / answers.length * parties[i].count);
    }

    parties.sort(function(a, b) {
        return b.procent - a.procent;
    })
    first.innerHTML = parties[0].procent;
    second.innerHTML = parties[1].procent;
    thirth.innerHTML = parties[2].procent;
}

