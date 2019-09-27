import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

var buttonByID = document.getElementById("idJokeButton");
buttonByID.onclick = getJokeID;

function getJokeID(id){
    id = document.getElementById("jokeIDInput").value;
    var getJoke = jokes.getJokeById(id);
    document.getElementById("paragrafID").innerText = getJoke;
}

var buttonAddJoke = document.getElementById("addJokeButton");
buttonAddJoke.onclick = addJ;

function addJ(){
    var joke = document.getElementById("addJokeInput");
   jokes.addJoke(joke);
   console.log(joke);
}



var eventButton = document.getElementById("buttonID1");
eventButton.addEventListener("click", eventHandler);

function eventHandler(element){
    fetch("https://studypoints.info/jokes/api/jokes/period/hour")
    .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        var joke = data.joke;
        document.getElementById("divID").innerText= joke;
     });
    
}
