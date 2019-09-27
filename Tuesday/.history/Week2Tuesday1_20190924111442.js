// 1) Using existing functions that takes a callback as an argument
/*
Using the filter method:
Declare a JavaScript array and initialize it with some names 
(Lars, Jan, Peter, Bo, Frederik etc.). Use the filter method 
to create a new array with only names that contains the letter ‘a’.
*/

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

 filteredNames = names.filter(function (name) {
    return name.includes("a");
} )

console.log(filteredNames);

/*
Using the map method:
Use the names-array created above, and, using
its map method, create a new array with all names reversed.
*/

mappedNames = names.map(function (revnames) {
    return revnames.split("").reverse().join("");
});

console.log(mappedNames);

// 2) Implement user defined functions that take callbacks as an argument

/*
a) Implement a function: myFilter(array, callback)
that takes an array as the first argument, and a 
callback as the second and returns a new (filtered) 
array according to the code provided in the callback 
(this method should provide the same behaviour as the 
original filter method).

*/
funcion myFilter(array, callback){
    filteredN = [];
    for(var i = 0; i < array.length; i++){
        if(callback(array)){
            filteredN += array[i];
        }
    }
    return filteredN;
};

mappedName = array.map(function (revname) {
    for(var i = 0; i < revname.length; i++){
    if(revname[i] === "a"){
        return revname;
    }
    }
});






console.log(mappedName);