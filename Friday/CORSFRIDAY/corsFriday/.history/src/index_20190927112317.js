import 'bootstrap/dist/css/bootstrap.css'
//import Country from './Country';

var eventButton = document.getElementById("svg2");
eventButton.addEventListener("click", eventHandler, false);


function eventHandler(e){
    if(e.target.id != id){
        document.getElementById(id).style.fill = "blue"
    }
    var id = e.target.id;

    document.getElementById(id).style.fill = "red"


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


