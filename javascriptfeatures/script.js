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