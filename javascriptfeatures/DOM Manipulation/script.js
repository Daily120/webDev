//returns a list of all elements within h1 tag
var h1 = document.getElementsByTagName("h1");
//returns a list of all elements belonging to the class
var second = document.getElementsByClassName("second");
//returns one element which has the id
var first = document.getElementById("first");
//returns the first item what it find by Selector(the same as in CSS)
var select = document.querySelector("h1");
//returns a list of all elements wich match the Selector
var list = document.querySelectorAll("li, h1");

//will return 23. first it will select the first <li> tag. Then will return value of the attribute. 
document.querySelector('li').getAttribute('random');
//the same, but set. Sets the value to
document.querySelector('li').setAttribute('random', 50);


//changing className to apply style changes. The style for this class is implemented in CSS file
var applyStyle = document.querySelector("h1");
applyStyle.className = "coolTitle";
//a tag can have multiple classes(class= 'bold red')
var multClasses = document.querySelector("li");
multClasses.classList.add("element");
multClasses.classList.remove("element");
multClasses.classList.toggle("done"); //turns the class on and off


//accessing text inside the element
//first method can handle HTML code
second[0].innerHTML = "<strong>I have changed you!</strong>";
//second can't handle HTML code
second[0].textContent = "I have changed you twice! Now without HTML Code inside.";

//parentElement and childrenElement
parent = document.querySelector('li').parentElement; //parent element of li is ul
children = document.querySelector('body').children; //list of children of body tag

//Listening to Events
// var button = document.getElementsByTagName("button");

// button[0].addEventListener("click", function() {
//     console.log("CLICK!!!");
// })

//Shopping List
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
})