import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

var buttonByID = document.getElementById("idJokeButton");
buttonByID.onclick = METODEbuttonByID;

function getJokeID(){
    var getJoke = joke.getJokeByID(document.getElementById("jokeIDInput").value);
    document.getElementById("paragrafID").innerText = getJoke;
}