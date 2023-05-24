/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {}
//write your code here
const body = document.body;
const pcard = document.createElement("DIV");
pcard.classList.add("card");
body.append(pcard);

const h1 = document.createElement("H1");
pcard.append(h1);
h1.innerHTML = "3";
