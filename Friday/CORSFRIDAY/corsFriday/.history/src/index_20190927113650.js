import 'bootstrap/dist/css/bootstrap.css'
//import Country from './Country';

var eventButton = document.getElementById("svg2");
eventButton.addEventListener("click", eventHandler, false);
var color = document.getElementById(id).style.fill


function eventHandler(e){
    var id = e.target.id;
    if(color == e.target.style.fill){
        e.target.style.fill = 'red';
    }else{
        e.target.style.fill = color; 
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


