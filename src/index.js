/**
 *  ES8 Playground
 */

// String.prototype.padStart()
console.log('hi'.padStart(1));// 'hi'
console.log('hi'.padStart(2));// 'hi'
console.log('hi'.padStart(5));// '   hi'
console.log('hi'.padStart(5, 'p'));// 'ppphi'
console.log('hi'.padStart(5, 'power'));// 'ppwhi'

/// Stirng.prototype.padEnd()
console.log('hi'.padEnd(1));// 'hi'
console.log('hi'.padEnd(2));// 'hi'
console.log('hi'.padEnd(5));// 'hi   '
console.log('hi'.padEnd(5, 'p'));// 'hippp'
console.log('hi'.padEnd(5, 'power'));//'hipow'



// Object.entries / Object.values
const obj = {"1": "one", "2":"two", "3": "three"};
console.log(Object.entries(obj));// [["1", "one"], ["2", "two"], ["3", "three"]]
console.log(Object.values(obj));// ["one", "two", "three"]



// Object.prototype.getOwnPropertyDescriptor
const object = {"1": "one", "2":"two", "3": "three"};
console.log(Object.getOwnPropertyDescriptor(object, "1"));
// {
//     value: "one",
//     writable: true,
//     enumerable: true,
//     configurable: true
// }

console.log(Object.getOwnPropertyDescriptors(object));
// {
//     1: {
//         configurable: true,
//         enumerable: true,
//         value: "one",
//         writable: true,
//     },
//     2: {
//         ...
//     },
//     3: {
//         ...
//     }
// }



// Tailing commas in function parameter lists and calls
class Person {
    constructor(
        firstName,
        lastName,
        age,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

function tailingComma(
    param1,
    param2,
    param3,
) {
    console.log(`${param1} ${param2} ${param3}`);
}

tailingComma(
    'hello',
    'es8',
    'world',
);



// Async functions
const fetchData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('fetch complete!');
        }, 2000);
    });
};

console.log(`before`);
fetchData().then((data) => console.log(data));
console.log(`after`);

// console>
// before
// after
// fetch complete!

// Use Async function
const sayComplete = async () => {
    const message = await fetchData();
    console.log(`status: ${message}`);
}

console.log(`before`);
sayComplete();
console.log(`after`);
// console>
// before
// after
// status: fetch complete!
