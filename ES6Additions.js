// 1- Let , Const and Block Scope
/*
the value of "Let" can be updated while the value of "Const" can't be upated
"Let" and "Const" are variables that have block scope 
block scope is that the variable that declared inside a block or "{}" like in "if" or "for" loop
these variables can't be accessed from outside this block
the hoisting of "Let" and "Const" is different from the hoisting of "var"
the hoisting of "Let" and "Const" Will Make Error "cannot access (x) before intializing"
hoisting of "Var" Will Make "undefined" 
*/

// 2- Arrow Function
/*
"Arrow Function" provides a short syntax and different behaviour with "this" keyword
where in regular function that made with "function" and in objects the keyword "this" refers to object where "this" is inside
while in arrow function it doesn't have "this" it will inherit it 
*/

// 3- Template Literals
/*
you can use it using backticks (``) where you can embed variables inside it like this "${variable}"
and it is multiline where there is no need for "/n" for creating new lines unlike using double quotes ("")
*/

// 4- String Methods
/*
ES6 Added New String Methods Like :
includes("substring", index) => this checks if the string contains specified substring or not and returns a boolean value 
it starts from a specified index if you don't specify an index it will start from "0" index

startsWith("substring") => this checks if the string starts with specified substring and returns a boolean value 
endsWith("substring") => this checks if the string ends with specified substring and returns a boolean value 
repeat(number) => return a new string with specified number of copies of the original string
*/

// 5- Default And Rest Parameter
/*
Default Parameter:
you can add to the function paramters a default value if it took no argument
Rest Parameter:
if you don't know how many arguments you will get you can add a rest parameter "...restParam"
it will collect all the remainig parameters into one array (you have to put the rest parameter last one in the parameters)
*/

// 6- Destructuring
/*
You can extract values from arrays and object into variables but destructuring array is different from object
you can use the concept of default parameter and rest parameter with destructuring for missing characters
Destructuring Array:
const [a,b,c] = numArray
Destructuring Object: you have to name the extracted variables with same name of the object properties
const {name,age,city} = object
*/

// 7- Enhanced Object keys
/*
if you have a global variable you can set only name of key in object and it will take the value of global variable
(variable and the key must have the same name)
Ex:
let name = "ahmed"
let person = {
name,    (person.name = "ahmed")
}
*/

// 8- for of loop
/*
from the additions of ES6 is "for of loop" where you can loop on array, string or any other iterator object
*/

// 9- Generator Function
/*
it is a function that has stages each state is like an object has a "value" and "done" properties
the "value" is a thing you can define and the "done" represents the state of the function as a boolean value is it finished or not
the "Generator Function" is defined using ( function* )
you can define the value with "yield" keyword and use the "next()" method to go the following stage
here is an example:
function* nums(){
yield 1;   ( "1" in considered the value of this stage)
yield 2;   ( "2" in considered the value of this stage)
yield 3;   ( "3" in considered the value of this stage)
}
nums.next()  => it will return a {value: 1, done: false}   ("done: false" means there is still stage and the function isn't finished)
use the next method to go to the following stage untill it will return {value: undefined , done: true}
 */

// 10- Spread Operators
/*
with using spread operators you can make a copy from objects , arrays or strings that passed by value not by reference
and you can modify the object or array using the "Spread Operator"
*/

// 11- Array Methods
/*
find() => it takes a function and returns the first element that meets the conditions 
findIndex() => it takes a function and returns the index of the first elmenet that match the conditions
includes("substring", index) => this checks if array contains specified character or not and returns a boolean value 
it starts from a specified index if you don't specify an index it will start from "0" index

entries() => it returns an array where each element is an array of "key" and "value" pair representing [index, character]
copyWithin(target, start , end) => to take a part from array and paste it to another place in the same array
fill(value, start, end) => it takes any value and put it in each character of a specific part of the array
difference between copyWithin() and fill() :
copyWithin() => takes a copy from the array and paste in the same array
fill() => takes any value and paste it to the array

Array.from(iterable) => it returns an array from an iterable object
*/

// 12- Object Methods
/*
Object.entries(object) => it returns an array where each element is an array of "key" and "value" pair representing [key, value]
Object.assign(targetObject, sourceObj1, sourceObj2) => to modify an object by adding one or more source objects to main object
to put the properties of one or more objects to one main object (the main object is the "targerObject" the first object)

*/

// 13- Numbers Methods
/*
isNaN(value) => it returns a boolean value determines if the value is "Not a Number" (true) or a "number" (false)
Number.isInteger(value) => it returns a boolean value determines whether tha value is integer (true) or not (false)
parseInt(string) => it returns first numbers as integer in specified string untill it faces a "Not a Number" character
if value starts with "Not a Number" character it will return "NaN"

parseFloat(string) => as same as "parseInt()" but if it return a number it will return it with decimal if it has
*/

// 14- Math Methods
/*
Math.cbrt(num) => it returns the cube root of the num
*/

// import & export
/*
you can move objects , functions and primitive values from a file (module) to another file (module)
use "export" to move items from the module to another module
use "import" to recieve the exported items and use it in the module
(in default export you can import the item with any name you want 
but in normal export you have to import items with same name they exported with and then changed it if you want)
*/

// 15- Promises
/*
you can create a promise using "Promise" constructor to make asynchronous operations
without affecting the single threaded stack of the javaScript
and promise takes a function that takes two function as arguments "resolve" for success and "reject" for fail
these two functions are the functions that will be called on success or fail
and it has the following 3 status that represent the state of the async operation:
pending => means it still in progress not successed or failed
fulfilled => means the operations is done sucessfully and there is a response
rejected => means the opertaion has failed and there isn't any response 
*/

// 16- Map & WeakMap
/*
you can use them using "Map" and "WeakMap" constructors
"Map" is consist of key and value pairs like the object 
but the difference is in "Map" the key can be any data type unlike object it has to be string or variable
you can use the "set()" method to set key and value pair in the "Map" and you can use the loops to iterate over it 
"WeakMap" is like "Map" but the keys must be objects only and you can't use the loops to iterate over it
"Map" is strongly Held so if you remove reference to key or value it's entry will still exist in map untill it explictly removed
"WeakMap" is weakly held so if there is no reference for the key or value it will be garbage-collected
 */

// 17- Set & WeakSet
/*
you can use them using "Set" and "WeakSet" constructors
"Set" stores unique values and the value can by any type and you can iterate over it
it has the following methods:
"add(value)" method to add a value (add an array of duplicated characters to "Set" to remove duplications)
"has(value)" method to check for existence of value in the "Set" and returns a boolean value
"delete(value)" to delete a specific value from the "Set"
"clear()" to clear the whole "Set" and delete the values

"WeakMap" it has the same methods as "Set" but the value are objects only and you can't iterate over it
and it has a weak reference like "WeakMap" so if there is no reference for a value it will be garbage-collected
 */
