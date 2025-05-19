document.createElement('p')

// -> append(element)       it works on an element / string / text      it alaways adds at last
// -> prepend(element)      it always add on first / starting
// -> insertAdjacent(where, element)

document.createElement('p');
let newP = document.createElement('p');
console.dir(newP);
newP.innerText = "Hi, I am Drish Thareja";
console.dir(newP);



// -> appendChild(element)      to insert any element in object in nesting form 
let body = document.querySelector('body');
body.appendChild(newP);

let box = document.querySelector('.box');
box.appendChild(newP);

box.appendChild(newP);
let btn = document.createElement('button');

console.dir(btn);
btn.innerText = "click me!";
box.appendChild(btn);



// prepend
// box.prepend(newP);




// insertAdjacent

// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.

let btn = document.createElement('button');
btn.innerText = "New Button";
let p = document.querySelector('p');
p
btn
p
p.insertAdjacentElement('beforebegin', btn);
p.insertAdjacentElement('afterbegin', btn);
p.insertAdjacentElement('afterend', btn);
p.insertAdjacentElement('beforeend', btn);

