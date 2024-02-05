/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Implement a function declaration called `search` that:
// - Takes a paramater representing an Array of `animals`.
// - Takes a paramater representing a String, the name of an animal on which to perform a search.
// - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
// - Returns `null` if no animal with that name exists
function search(array, string){
    // loop through the animals array
for (let i = 0; i < array.length; i++){
// if the name property on  a given object is the same as string
if(array[i].name === string){
    // return the object
  return array[i]
} 
}
//otherwise return null

  return null
} 



//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// - Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
// - If an animal with that name exists within the `animals` Array, 
//replace it's entire Object with the replacement Object.
// - Otherwise do nothing.
function replace(array, string, object){
// loop through the array 
for(let i = 0; i < array.length; i++){
    // see if the string essists at the name key
    if(array[i].name === string){
        // if true reasign that index to the new object
        return array[i] = object
    }
}
// see if the string essists at the name key
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
// - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
// - If an animal with that name exists within the `animals` Array, remove it.
function remove(array, name){
// loop through the array
for(let i = 0; i < array.length; i++){
    if(array[i].name === name){
       array.splice(i, 1)
    }
}
// if the name exsists as a property on the object 
// pop the object
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//    - Checks that the animal Object has a `name` property with a length > 0.
//    - Checks that the animal Object has a `species` property with a length > 0.
//    - Has a **unique** name, meaning no other animals have that name.
//    - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}