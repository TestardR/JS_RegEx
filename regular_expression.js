// https://alligator.io/js/regular-expressions-for-regular-people/

// We can create a new RegExp object in few ways:

//  1. /expression/.match('string to test against')
//  2. new RegeExp('expression')
//  3. new RegExp(/expression/)

//  Example: I want to convert aaron.arney:alligator.io into Aaron Arney [Alligator].

// Step 1 : matching the First Name

const unformattedName = 'aaron.arney:alligator.io';

// The is is a flag. It stands for case insensitive. Tath means that our expression with ignore casing on the string
// const found = unformattedName.match(/aaron/i);
// console.log(found);
// expected output: Array [ "aaron" ]

// Lets make our code dynamic, all users wont use Aaron as a first name...
// // const found = unformattedName.match(/[a-z]/i);
// console.log(found);
// expected output: Array [ "a" ]

// Lets assume that the given username will have between 1 and 15 characters
const exp = new RegExp(/[a-z]{1,15}/, 'i');
const found = unformattedName.match(exp);
console.log(found);
// expected output: Array [ "aaron" ]
