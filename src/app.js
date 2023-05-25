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
const h1 = document.createElement("H1");
pcard.append(h1);
h1.innerHTML = numero;
h1.classList.add("numbertop");

const suit = document.createElement("I");
suit.classList.add("fa-heart");
suit.classList.add("fa-solid");
pcard.append(suit);

const h2 = document.createElement("H1");
pcard.append(h2);
h2.innerHTML = numero;
h1.classList.add("numberbotom");
