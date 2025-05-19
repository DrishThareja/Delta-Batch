// Navigation
// -> parentElement
// -> children
// -> previousElementSibling / nextElementSibling

let h4 = document.querySelector('h4');
h4.parentElement
h4.children
let box = document.querySelector('.box');
box.children;
box.childElementCount;  // checks how many children are there of an element

let ul = document.querySelector('ul');
ul.parentElement
ul.childElementCount;
ul.children;

ul
ul.children
ul.children[0];
ul.children[1];
ul.children[2];

ul.children[2].previousElementSibling;
ul.children[1].previousElementSibling;

let img = document.querySelector('img');
img.previousElementSibling;
img.previousElementSibling.style;
img.previousElementSibling.style.color = "green";

