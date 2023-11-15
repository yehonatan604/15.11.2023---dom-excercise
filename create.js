let div = document.querySelector(".myDiv"); // get div

let par = document.createElement("p"); // create element

par.innerHTML = "this is paragraph"; // add innerHTML
par.style.color = "red"; // add color
par.className = "center"; // add a class name

div.appendChild(par); // insert the created element into our div