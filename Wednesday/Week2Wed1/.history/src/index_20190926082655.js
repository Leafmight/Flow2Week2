import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");


<input id="jokeIDInput" type="text" >
 


<button type="button" id="idJokeButton">Click Me!</button>

<p></p>

