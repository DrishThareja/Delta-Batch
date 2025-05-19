// style property
// obj.style

let img = document.querySelector('img');
console.dir(img);
img.style
let heading = document.querySelector('h1');
heading.style;
heading.style.color = 'purple';
heading.style.backgroundColor = 'yellow';

let links = document.querySelectorAll(".box a");

for (let i = 0; i < links.length; i++){
    links[i].style.color = "yellow";
}

// or

for (link of links) {
    link.style.color = "purple";
}
