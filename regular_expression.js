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
// const exp = new RegExp(/[a-z]{1,15}/, 'i');
// const found = unformattedName.match(exp);
// console.log(found);
// expected output: Array [ "aaron" ]

// Step 2 : matching the Last Name

// The account for the second expression, we have to make use of '.'.
// Be careful here. The . can mean one of two things in an expression :
// . => Match any character except newline
// \. => Match a .

// Note : Using either version in this context will generate the same result, but that won’t always be the case. Tools like eslint will sometimes mark the escape sequence \ as unnecessary, but I say better safe than sorry!

// const unformattedName = 'aaron.arney:alligator.io';

// const exp = new RegExp(/[a-z]{1,15}\.[a-z]{1,15}/, 'i');
// const found = unformattedName.match(exp);
// console.log(found);
// expected output: Array [ "aaron.arney" ]

// We can split the string into two items as well as excluding the full stop from being returned by the expression, we can use capturing groups. These are denoted by parenthesis () and wrap around parts of the expression
// The syntax for using capture groups is simple: (expression).

const exp = new RegExp(/([a-z]{1,15})\.([a-z]{1,15})/, 'i');
const found = unformattedName.match(exp);
console.log(found);
// expected output: Array [ "aaron.arney", "aaron", "arney" ]
