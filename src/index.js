import "./styles/styles.css";
import getQuote from "./getQuote";
import smiley from "./assets/smiley.svg";

function loadLodash() {
  import("lodash")
    .then((module) => {
      document.getElementById("lodashText").innerText = "Lodash loaded!!";

      setTimeout(() => {
        document.getElementById("lodashText").innerText = "";
      }, 8000);
    })
    .catch((e) => console.log("Failed to import lodash", e));
}
document.getElementById("quoteBtn").addEventListener("click", () => {
  getQuote();
  loadLodash();
});

const smileyImg = document.getElementById("smileyImg");
smileyImg.src = smiley;
getQuote();
