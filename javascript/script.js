const intro = document.getElementById("intro");
const statements = document.getElementById("statements");
const result = document.getElementById("result");
const title = document.getElementById("title");
const statement = document.getElementById("statement");

var counter = 0;

var answers =[];
const buttonDiv = document.getElementById("buttonDiv");
var allButtons = buttonDiv.getElementsByClassName("btn");

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
    var partyResult = [];
    for(var i = 0; i < parties.length; i++){
        partyResult[parties[i].name] = 0;
    }
    
   for (let index = 0; index < answers.length; index++) {
        for (let indexparties = 0; indexparties < subjects[index].parties.length; indexparties++) {
               var party = subjects[index].parties[indexparties];
               //console.log(party);
               if(answers[index] == party.position){
                    partyResult[party.name]++;
               }
        }
   }
   for (let i = 0; i < subjects[1].parties.length; i++) {
       console.log(partyResult[subjects[i].parties[1].name]);
   }

    
   
   console.log (parties[0].name);
//    console.log(partyResult)
}
