import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

var buttonByID = document.getElementById("idJokeButton");
buttonByID.onclick = getJokeID;

function getJokeID(){
    var getJoke = jokes.getJokeByID(document.getElementById("jokeIDInput").value);
    document.getElementById("paragrafID").innerText = getJoke;
}