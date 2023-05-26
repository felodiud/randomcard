/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {}
//write your code here
const body = document.body;
const pcard = document.createElement("DIV");
pcard.classList.add("card", "center");
body.append(pcard);

let numero = Math.floor(Math.random() * 13 + 1);
if (numero == 13) {
  numero = "K";
} else {
  if (numero == 12) {
    numero = "Q";
  } else {
    if (numero == 11) {
      numero = "J";
    } else {
      if (numero == 1) {
        numero = "A";
      }
    }
  }
}

let pinta = Math.floor(Math.random() * 4);

const h1 = document.createElement("H1");
pcard.append(h1);
h1.innerHTML = numero;
h1.classList.add("numbertop");

const imgcontainer = document.createElement("DIV");
imgcontainer.classList.add("imgcontainer");
pcard.append(imgcontainer);

const suit = document.createElement("I");
suit.classList.add("suit");
suit.classList.add("fa-5x");
suit.classList.add("fa-solid");
imgcontainer.append(suit);

if (pinta == 0) {
  suit.classList.add("fa-diamond");
  suit.style.color = "red";
} else {
  if (pinta == 1) {
    suit.classList.add("fa-heart");
    suit.style.color = "red";
  } else {
    if (pinta == 2) {
      suit.classList.add("fa-heart-crack");
      suit.style.color = "black";
    } else {
      suit.classList.add("fa-heart-pulse");
      suit.style.color = "black";
    }
  }
}

const h2 = document.createElement("H1");
pcard.append(h2);
h2.innerHTML = numero;
h2.classList.add("numberbottom");
