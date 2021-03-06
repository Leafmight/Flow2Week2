// 1) Using existing functions that takes a callback as an argument
/*
Using the filter method:
Declare a JavaScript array and initialize it with some names 
(Lars, Jan, Peter, Bo, Frederik etc.). Use the filter method 
to create a new array with only names that contains the letter ‘a’.
*/

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

filteredNames = names.filter(function(name) {
  return name.includes("a");
});
console.log("Opgave 1.1:");
console.log(filteredNames);

/*
Using the map method:
Use the names-array created above, and, using
its map method, create a new array with all names reversed.
*/

mappedNames = names.map(function(revnames) {
  return revnames
    .split("")
    .reverse()
    .join("");
});

console.log("Opgave 1.2:");
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
    if (callback(array[i], i, array)) filteredN.push(array[i]);
  }
  return filteredN;
}

/*
Test the method with the same array and callback as in 
the example with the original filter method.
*/
console.log("Opgave 2.1:");
console.log(myFilter(names, filterByA));

/*
b) Implement a function: myMap(array, callback)that, 
provided an array and a callback, provides the same 
functionality as calling the existing map method on an array.
*/

function rev(array) {
  return array
    .split("")
    .reverse()
    .join("");
}
function myMap(array, callback) {
  var mapNames = [];
  for (var i = 0; i < array.length; i++) {
    mapNames.push(callback(array[i], i, array));
  }
  return mapNames;
}
console.log("Opgave 2.2:");
console.log(myMap(names, rev));

// 3) Using the Prototype property to add new functionality to existing objects

Array.prototype.myFilter2 = function(callback) {
  var filteredN = [];
  for (var i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) filteredN.push(this[i]);
  }
  return filteredN;
};
console.log("Opgave 3.1:");
console.log(names.myFilter2(filterByA));

Array.prototype.MyMapper2 = function(callback) {
  var mapNames = [];
  for (var i = 0; i < this.length; i++) {
    mapNames.push(callback(this[i], i, this));
  }
  return mapNames;
};
console.log("Opgave 3.2:");
console.log(names.MyMapper2(rev));

// 4) Getting really comfortable with filter and map
/*
a) Given this array: var numbers = [1, 3, 5, 10, 11];
Use map + a sufficient callback to map numbers into this array:
var result = [4,8,15,21,11];
*/
var numbers = [1, 3, 5, 10, 11];

function sortNumbers(a, b) {
  return a + b;
}

function numberSeq(numbs, callback) {
  addedNumbers = [];
  for (var i = 0; i < numbs.length; i++) {
    if (i != numbs.length - 1) {
      addedNumbers.push(callback(numbs[i], numbs[i + 1]));
    } else {
      addedNumbers.push(numbs[i]);
    }
    return addedNumbers;
  }
}
/*
b) Use map() to create the <a>’s for a navigation set 
and eventually a string like below (use join() to get 
the string of <a>’s):
<nav>
  <a href=””>Lars</a>
  <a href=””>Peter</a>
  <a href=””>Jan</a>
  <a href=””>Bo</a>
</nav>
*/

console.log("Opgave 4.1");
console.log(numberSeq(numbers, sortNumbers));
var htmlNumbers =
  "<nav>" +
  names
    .map(function(name) {
      return "<a href=””>" + name;
    })
    .join("</a>") +
  "</nav>";

console.log("Opgave 4.2");
console.log(htmlNumbers);

/*
c) Use map()+(join + ..) to create a string, representing 
a two column table, for the data given below:
var names = [
{name:"Lars",phone:"1234567"}, 
{name: "Peter",phone: "675843"}, 
{name: "Jan", phone: "98547"},
{name: "Bo", phone: "79345"}
];
*/
var names = [
  { name: "Lars", phone: "1234567" },
  { name: "Peter", phone: "675843" },
  { name: "Jan", phone: "98547" },
  { name: "Bo", phone: "79345" }
];

var htmlPersons =
  "<table><tr><th>Name</th><th>Phone</th></tr>" +
  names
    .map(function(person) {
      return (
        "<tr><td>" + person.name + "</td><td> " + person.phone + "</td></tr>"
      );
    })
    .join(" ") +
  "</table>";

console.log("Opgave 4.3");
console.log(htmlPersons);

//document.getElementById("fireC").innerHTML = htmlPersons;

/* // FEJL I LØSNING SÅ UDKOMMENTERET.
function namesFilter(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      aNames.push(array[i]);
    }
  }
  return aNames;
}
function nameFunction(array) {
  var aNames = [];
  var htmlPersons =
    "<table><tr><th>Name</th><th>Phone</th></tr>" +
    array
      .map(function(person) {
        if (person.name.includes("a")) {
          return (
            "<tr><td>" +
            person.name +
            "</td><td> " +
            person.phone +
            "</td></tr>"
          );
        }
      })
      .join(" ") +
    "</table>";
}
console.log(nameFunction(names));

*/

// 5) reduce

/**
 a) Use join to create a single string from all, 
 with names: comma-, space. and  # - separated.
 */

var all = ["Lars", "Peter", "Jan", "Bo"];

var commaAll = all
  .map(function(al) {
    return al;
  })
  .join(",");

console.log("Opgave 5.1: Comma");
console.log(commaAll);

var spaceAll = all
  .map(function(al) {
    return al;
  })
  .join(" ");

console.log("Opgave 5.1: Space");
console.log(spaceAll);

var hashtagAll = all
  .map(function(al) {
    return al;
  })
  .join("#");

console.log("Opgave 5.1: HashTag");
console.log(hashtagAll);

/*
b) Given this array: var numbers = [2, 3, 67, 33]; 
Create a reducer callback that, with reduce(..),  
will return the sum (105) of all values in numbers
*/

var numbers1 = [2, 3, 67, 33];

function myFunc1(total, num) {
  return total + num;
}

console.log("Opgave 5.2");
console.log(numbers1.reduce(myFunc1));

/*
  Given this array:
var members = [
 {name : "Peter", age: 18},
 {name : "Jan", age: 35},
 {name : "Janne", age: 25},
 {name : "Martin", age: 22}]

Create a reducer callback that, using the Array’s 
reduce() method,  will return the average age of
all members (25 for the provided array).
  */
 console.log("Opgave 5.3")
var members = [
  { name: "Peter", age: 18 },
  { name: "Jan", age: 35 },
  { name: "Janne", age: 25 },
  { name: "Martin", age: 22 }
];

var avg = members.reduce((acc, p, idx ,arr) => {
console.log('acc', acc, 'person', p, 'idx', idx)
if(idx === arr.length-1){
  return (acc + p.age)/arr.length;
}
return acc + p.age;

},0);


//console.log("Opgave 5.3")
console.log(avg);
/*
var reducer = function(accumulator, member,index,arr ){
    return Math.ave
    
    return member.reduce((a, b) => (a + b)) / member.length;
}

var euros = [29.76, 41.85, 46.5]; 

var sum = members.reduce( function(accumulator, member,index,arr ){
  return Math.ave(member[index].age);
});


console.log(sum);
*/
