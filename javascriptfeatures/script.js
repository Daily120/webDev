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