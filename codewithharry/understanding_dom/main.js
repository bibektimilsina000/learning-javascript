let element = document.getElementById("first");
// element = element.className;
// element = element.childNodes;
element.style.color="red";
element.innerText="this is a test text file";
// console.log(element);


let sel = document.querySelector('#second');
// console.log(sel);
sel.innerText='this is the second text';

let elems = document.getElementsByClassName("child");
elems=elems[1];

console.log(elems.innerText)
