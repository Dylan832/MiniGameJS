// SELECTEURS
// document.querySelector("");
// TOUJOURS METTRE LES CONST EN HAUT DE LA PAGE

// const baliseHTML = document.querySelector("h4");
// Les priorite c'est <div> > #id >.class >baliseHTML
// console.log(baliseHTML);

const questionContainer = document.querySelector(".click-event");
// toujours mettre console.log dans las console apres avoir fait une variable pour etre sur quelle fonctionne
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

// const ring = () => {
//   const audio = new Audio();
//   audio.src = "./objet.mp3";
//   audio.play();
// };

// ring()
questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//-----------------------------------------------------------------
//Mousemove

const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "red";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//-------------------------------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "yellow";
  } else if (e.key === "k") {
    keypressContainer.style.background = "red";
  } else {
    keypressContainer.style.background = "blue";
  }
});

//--------------------------------------------------------------
//Scroll Event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//----------------------------------------------------------------------
// Form event

const inputName = document.querySelector("input[type='text']");
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    //Affiche le contenu des variables
    document.querySelector("form > div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Language prefere : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//---------------------------------------------------------------
//Load Event

window.addEventListener("load", () => {
  console.log("Document charge !");
});

//------------------------------------------------------------------
//ForEach

// const boxes = document.getElementsByClassName("box");

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//----------------------------------------------------------------
//addEventListener VS onclick

// document.body.onclick = () => {
//   console.log("Click");
// };

// Bubbling et Usecapture

//----------------------------------------------------------------------
//Stop propagation

// questionContainer.addEventListener("click", (e) => {
//   alert("TEST");
//   e.stopPropagation();
// });
// removeEventListener

//------------------------------------------------------------------------
//BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);
// window.open("https:/google.com", "cours JS");
// window.close()

btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment quitter le site");
});

//prompt
btn1.addEventListener("click", () => {
  let answer = prompt("entrez votre nom");

  questionContainer.innerHTML += "<h3> Bravo " + answer + "</h3>";
});

setTimeout(() => {
  questionContainer.style.borderRadius = "300px";
}, 2000);
// "temps en milliseconde avant de declencher, 2000ms = 2sec"

// setInterval(() => {
//   document.body.innerHTML += `<div class='box'>
//   <h2>Nouvelle Boite </h2>
//   </div>`;
// }, 1000);
// Mieux vos mettre les guillement du 7 ``

document.body.addEventListener("click", () => {
  clearInterval(interval);
});
