//returns a list of all elements within h1 tag
var h1 = document.getElementsByTagName("h1");
//returns a list of all elements belonging to the class
var second = document.getElementsByClassName("seccond");
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