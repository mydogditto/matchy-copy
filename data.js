/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animal` and assign it to an empty object.
var animal = {}
//3. [ ] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
animal.species = "dog"
//4. [ ] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
animal['name'] = "Porsha"
//5. [ ] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
animal.noises = []

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Create a variable named `noises` and assign it to an empty array.
var noises = []
//  2. [ ] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
noises[0] = "woof"
//  3. [ ] Using an array function add another noise to the end of `noises`.
noises.push("bark")
noises.unshift("whine")
noises[noises.length] = "Whimper"



//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
animal["noises"] = noises
// 2. [ ] Using any syntax add another noise to the `noises` property on `animal`.
animal.noises.push("yelp")
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// 1. [ ] Create a variable named `animals` and assign it to an empty array.
var animals = [];
//  2. [ ] `push` our `animal` that we created to `animals`. You should now see your first animal appear on your `index.html` page!
animals.push(animal)
//  3. [ ] `console.log` `animals`. What does it look like?
//  4. [ ] Create a variable called `duck` and assign it to the data:
var duck =
{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
//  5. [ ] `push` `duck` to `animals`
animals.push(duck)
//  6. [ ] `console.log` `animals`. What does it look like?
var cat = {
  species: "cat", name: "mooshie", noises: ["meew", "perr", "hiss", "pounce"]
}
animals.push(cat)
//  7. [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.

//  8. [ ] `console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}