import './css/styles.css';
import GalacticAge from './js/age.js';

function handleFormComplete(event) {
  event.preventDefault();

  const presentAgeInput = document.getElementById("present-age").value;
  const pastAgeInput = document.getElementById("past-age").value;
  const futureAgeInput = document.getElementById("future-age");

  let ageOutput = new GalacticAge(presentAgeInput,pastAgeInput,futureAgeInput);

  document.getElementById("current-earth").innerText = ageOutput.earthAge;
  document.getElementById("current-mercury").innerText = ageOutput.mercuryAge;
  document.getElementById("current-venus").innerText = ageOutput.venusAge;
  document.getElementById("current-mars").innerText = ageOutput.marsAge;
  document.getElementById("current-jupiter").innerText = ageOutput.jupiterAge;


}

window.addEventListener("load", function () {
  this.document.querySelector("form#form-input").addEventListener("submit", handleFormComplete);
});

