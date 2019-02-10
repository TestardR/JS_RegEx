// https://alligator.io/js/regular-expressions-for-regular-people/

// We can create a new RegExp object in few ways:

//  1. /expression/.match('string to test against')
//  2. new RegExp('expression')
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

// We can split the string into two items, we can use capturing groups. These are denoted by parenthesis () and wrap around parts of the expression
// The syntax for using capture groups is simple: (expression).

// const exp = new RegExp(/([a-z]{1,15})\.([a-z]{1,15})/, 'i');
// const found = unformattedName.match(exp);
// console.log(found);
// expected output: Array [ "aaron.arney", "aaron", "arney" ]

// Step 3 : Matching the Domain Name
// Validating domain names and TLD’s is a difficult business. We’re going to pretend the domains that we parse, are always > 3 && < 25 characters. The TLD’s are always > 1 && < 10

// const unformattedName = 'aaron.arney:alligator.io';

const exp = new RegExp(
  /([a-z]{1,15})\.([a-z]{1,15}):([a-z]{3,25}\.[a-z]{2,10})/,
  'i'
);

const found = unformattedName.match(exp);

// console.log(found);
// expected output: Array [ "aaron.arney:alligator.io", "aaron", "arney", "alligator.io" ]

// Step 4: A Shortcut
// By using the + quantifier, we can tell our expression to repeat the preceding token as many times as it can. It will continue until it hits a dead end, in our case the full stop.
// This expression also introduces the g flag, which stands for global. It tells the expression that we want to repeat our search as many times as possible, instead of the least times.
// With the global flag

// With the global g flag
'aaron.arney:alligator.io'.match(/[a-z]+/gi);
// console.log('aaron.arney:alligator.io'.match(/[a-z]+/gi));
// expected output: Array(4) [ "aaron", "arney", "alligator", "io" ]

// Without the global flag
'aaron.arney:alligator.io'.match(/[a-z]+/i);
console.log('aaron.arney:alligator.io'.match(/[a-z]+/i));
// expected output: Array(4) [ "aaron" ]
