import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");

var buttonByID = document.getElementById("idJokeButton");
buttonByID.onclick = getJokeID;

function getJokeID(id){
    id = document.getElementById("jokeIDInput").value;
    var getJoke = jokes.getJokeByID(id);
    document.getElementById("paragrafID").innerText = getJoke;
}