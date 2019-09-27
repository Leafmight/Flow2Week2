import 'bootstrap/dist/css/bootstrap.css'
//import Country from './Country';

var eventButton = document.getElementById("svg2");
eventButton.addEventListener("click", eventHandler, false);
var clicked = false;



function eventHandler(e){
    if$
    var id = e.target.id;
    console.log(e.target.style.backgroundColor);
    clicked = !clicked;
    if(clicked){
        e.target.style.fill = 'red';

    }else{
        e.target.style.fill = 'rgb(192, 192, 192)'; 

    }
    

    console.log(id);
    fetch("http://restcountries.eu/rest/v1/alpha?codes=" + id)
            .then(data =>{
               var names = data.name;
               var population = data.population;
               var area = data.area;
               var capital = data.capital;
               console.log(names);
               // = new Country(name, population, capital, area);
    });
    console.log(e);
   
};


