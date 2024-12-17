const button = document.createElement("button");
const para = document.createElement("p");
const body = document.querySelector("body");

button.textContent = "Bonjour";
body.appendChild(button);
body.appendChild(para);

button.addEventListener("click", () => {
  para.textContent = "Hello world";
});

const button2 = document.createElement("button");
const para2 = document.createElement("p");

body.appendChild(button2);
body.appendChild(para2);

para2.textContent = "rouge";

button2.textContent = "Rouge";
button2.addEventListener("click", () => {
  para2.style.color = "red";
});

const button3 = document.createElement("button");
const ul = document.createElement("ul");

body.appendChild(button3);
button3.textContent = "liste";
body.appendChild(ul);

button3.addEventListener("click", () => {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.textContent = "Nouvel élément";
});
