import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";
window.onload{

const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
document.getElementById("jokes").innerHTML = allJokes.join("");



    fetch("http://localhost:3333/api/users")
    .then(response => response.json())
      .then(data => {
          let userTable = data.map(function(user){
            return "<tr><td>" + user.id + 
            "</td><td>" + user.age +
            "</td><td>" + user.name +
            "</td><td>" + user.gender +
            "</td><td>" + user.email + "</td></tr>"
          }).join("");
          document.getElementById("UserList").innerHTML = userTable;
          
      })
    






    }