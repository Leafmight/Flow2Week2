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
})

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
function filterByA(array) {
    return array.includes("a");
}

function myFilter(array, callback) {
    var filteredN = [];
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array))
            filteredN.push(array[i]);

    }
    return filteredN;
}

/*
Test the method with the same array and callback as in 
the example with the original filter method.
*/

console.log(myFilter(names, filterByA));

/*
b) Implement a function: myMap(array, callback)that, 
provided an array and a callback, provides the same 
functionality as calling the existing map method on an array.
*/

function rev(array) {
    return array.split("").reverse().join("");
};
function myMap(array, callback) {
    var mapNames = [];
    for (var i = 0; i < array.length; i++) {
        mapNames.push(callback(array[i], i, array))

    }
    return mapNames;
}
console.log(myMap(names, rev));

var newArray = names.myFilter(function(name) {
    Array.filteredN;
});

console.log(newArray);