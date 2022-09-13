import "./styles/styles.css";
import getQuote from "./getQuote";
import smiley from "./assets/smiley.svg";
document.getElementById("quoteBtn").addEventListener("click", getQuote);

const smileyImg = document.getElementById("smileyImg");
smileyImg.src = smiley;
getQuote();
