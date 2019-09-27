import 'bootstrap/dist/css/bootstrap.css'
//import Country from './Country';

var eventButton = document.getElementById("svg2");
eventButton.addEventListener("click", eventHandler, false);

var prev;



function eventHandler(e){
    
    var id = e.target.id;
    
    if(!prev){
        e.target.style.fill = 'red';
        prev = e.target;
    }else{
        prev.style.fill = 'rgb(192, 192, 192)'; 
        e.target.style.fill = 'red';
        prev = e.target;
    }
    

    function handleHttpErrors(res){
        if(!res.ok){
            return Promise.reject({ status: res.status, fullError: res.json() })
        }
    }
    console.log(id);
    fetch("http://restcountries.eu/rest/v1/alpha?codes=" + id)
        .then(handleHttpErrors)
            .then(data =>{
                console.log(data);
               var names = data[0].name;
               var population = data.population;
               var area = data.area;
               var capital = data.capital;
               console.log(names);
               // = new Country(name, population, capital, area);
    });
    console.log(e);
   
};


