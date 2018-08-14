// Function Declaration
function sayHello() {
    console.log("Hello");
}
sayHello();

//Anonymous Function () => void
var sayBye = function () {
    console.log("Bye");
}
sayBye();

//Function with arguments
function sing(song) {
    console.log(song);
}
sing("This is America. Don't catch you slippin' up");

//Arrays
var list = ["tiger", "cat", "bear", "bird"];
var mixed = [1, 2, "522", "Helloooooo"];
mixed.forEach(item => {
    console.log(item);
});
//A list of functions
var functionList = [function apple() {
    console.log("apple");
}]
functionList[0]();

//Creating an object
var user = {
    name: "John",
    age: 34,
    hobby: "Soccer",
    isMarried: false,
    shout: function () {
        console.log("AHHHHHH!");
    }
};
user.favouriteFood = "spinach"; //will add this prorerty to the object

//Loops
for (var i = 0; i < 100; i++) {

}

do {

} while (false) {

}

list.forEach(item => {
    console.log(item);
})

//ternary operator condition ? expr1 : expr2
var choise = 5>3 ? true : false;

//switch
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction"
    }
    return whatHappens;
}

//ES5 + ES6
//let and const
//const player = 'bobby'; //use const if the value of variable should never change.
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
    let wizardLevel = true; //let creates a scope(access level) inside if block
    console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);

//Destructuring
const obj = {
    player: 'bobby',
    experience: 100,
    wizardLevel: false
};

const { player, experience } = obj; //takes the exact property from an object and assign it to a variable with the same name
let { wizardLevel } = obj;

//Object properties
const name = 'john snow';

const obj2 = {
    [name]: 'hello', //dinamic property name. In this case- john snow
    [1 + 3]: 'hihi' // 4: 'hihi'
}

const a = 'Simon';
const b = true;
const c = {};

const obj3 = {
    a, //a: 'Simon'
    b, //b: true
    c  //c: {}
}

//Template strings
// `` - tilda key
const age = 34;
const pet = "horse"

const greetingBest = `Hello ${name}, you seem to be ${age-10}. What a lovely ${pet} you have!`;

//default arguments
function greet(name='', age=30, pet='cat') {
    return `Hello ${name}, you seem to be ${age-10}. What a lovely ${pet} you have!`;
}

//Symbol
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo'); //sym2 isn't equal to sym3. Symbol creates unic object. Used to eleminate coflicts.

//arrow functions
const add = (a, b) => a + b; //returns what after fat arrow

const add2 = (a, b) => {
    //if you want to do more than just return
}

//Advanced Functions
const first = () => {
    const greet = "Hi";
    const second = () => {
        alert(greet);
    }
    return second; //returning the function itself(but executing it before)
}

const newFunc = first(); //newFunc = second func. But is has access to greet argument of its parent function. Magic
newFunc();
//Closures - a function ran. The function executed. It's never going to execute again.
// BUT it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope.

//Currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4); //the way we call such kind of function
const multiplyBy5 = curriedMultiply(5); //one way of using. Creating specific functions
multiplyBy5(3);

//Compose
const compose = (f, g) => (a) => f(g(a)); //f,g-functions; a-argument;

const sum = (num) => num + 1;

compose(sum, sum)(5); //returns 7;     (sum, sum) => (5) => sum(sum(5))

//Advanced Arrays
//Map - itterate through each element of array and do what is defined in function. After returns an array with results.
const array = [1, 2, 10, 16];
const mapArray = array.map((num) => {
    return num * 2;
});

//filter
const filterArray = array.filter(num => num > 5); //if num > 5, return num

//reduce
const reduceArray = array.reduce((accumulator, num) => { //accumulates the result in accumulator
    return accumulator + num;
}, 0); // 0 is the starting value of accumulator(can be any)
//will return sum of all elements in array

//Class
class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    //method
    introduce() {
        console.log(`Hi, I am ${this.name}. I am a ${this.type}`);
    }
}
//Inheritance
class Wizard extends Player {
    constructor(name, type) {
        super(name, type); //base class constructor
    }
    play() {
        console.log(`WHEEEE, I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');

//ES7
//incluses
'Helooooo'.includes('o'); //returns true
const pets = ['cat', 'dog', 'bat'];
pets.includes('dog');

//Math.power as **
const square = (x) => x**2;

//ES8
'Turtle'.padStart(10); //returns '10 spaces Turtle'
'Turtle'.padEnd(10); //returns 'Turtle 10 spaces'

Object.entries(obj); //each object property is in array. [key, value]

//New feature in ES6 - Promises. Used instead of callbacks. I promise to return something to ypu un the future
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Suff Worked');
    } else {
        reject('Error, it broke');
    }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Helooooo')
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Pop-Corn')
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Is it me are you looking for?')
});

promise
    .then(result => {
        throw Error
        result + '!'
    })
    .then(result2 => console.log(result2))
    .catch(() => console.log('error!')); //.catch catches any error happening in promise before .catch

Promise.all([promise, promise2, promise3, promise4]) //it is waiting until all the promises get the result, and then runs the logic inside
    .then(values => {
        console.log(values);
    })

//real-world example
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//the page needs all links to be fetched before rendering
Promise.all(urls.map(url => {
    return fetch(url).then(responce => responce.json())
}))
.then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(() => console.log('error'));

//Async Await - based on promises

async function fetchUsers() {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await responce.json(); //await - pause execution until this function is not done
    console.log(data);
}
//the same fetchUsers function with simple promises
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp=> resp.json())
    .then(data => console.log(data))

// More realistic scenario
const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => {
            return fetch(url).then(responce => responce.json())
        }));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch(err) {
        console.log('oops!', err);
    }
}
