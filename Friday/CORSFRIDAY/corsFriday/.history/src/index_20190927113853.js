import 'bootstrap/dist/css/bootstrap.css'
//import Country from './Country';

var eventButton = document.getElementById("svg2");
eventButton.addEventListener("click", eventHandler, false);
var color = 'gray';


function eventHandler(e){
    var id = e.target.id;
    console.log(e.target.style.fill);
    if(color == e.target.style.fill){
        e.target.style.fill = 'red';
        console.log("hej");
    }else{
        e.target.style.fill = color; 
        console.log("med");
    }
    

    console.log(id);
    fetch("http://restcountries.eu/rest/v1/alpha?codes=" + id)
            .then(data =>{
               var names = data[0].name;
               var population = data.population;
               var area = data.area;
               var capital = data.capital;
               console.log(names);
               // = new Country(name, population, capital, area);
    });
    console.log(e);
   
};


