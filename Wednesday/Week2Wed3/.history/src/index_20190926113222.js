import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");


function eventHandler(e){
    console.log(e.target);
    fetch("http://localhost:3333/api/users")
    .then(response => response.json())
      .then(data => {
          let userTable = data.map(function(user){
            return "<tr><td>" + data.id + 
            "</td><td>" + data.age +
            "</td><td>" + data.name +
            "</td><td>" + data.gender +
            "</td><td>" + data.email + "</td></tr>"
          })
          
      })
    }


