import GalacticAge from './js/age.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleFormComplete(event) {
  event.preventDefault();

  const presentAgeInput = document.getElementById("present-age").value;
  const pastAgeInput = document.getElementById("past-age").value;
  const futureAgeInput = document.getElementById("future-age");

  let ageOutput = new GalacticAge(presentAgeInput,pastAgeInput,futureAgeInput);

  // display output for current age
  document.getElementById("current-earth").innerText = ageOutput.earthAge;
  document.getElementById("current-mercury").innerText = ageOutput.mercuryAge;
  document.getElementById("current-venus").innerText = ageOutput.venusAge;
  document.getElementById("current-mars").innerText = ageOutput.marsAge;
  document.getElementById("current-jupiter").innerText = ageOutput.jupiterAge;

  // display output for past age
  document.getElementById("past-earth").innerText = ageOutput.yearsPassedOnEarth();
  document.getElementById("past-mercury").innerText = ageOutput.yearsPassedOnMercury();
  document.getElementById("past-venus").innerText = ageOutput.yearsPassedOnVenus();
  document.getElementById("past-mars").innerText = ageOutput.yearsPassedOnMars();
  document.getElementById("past-jupiter").innerText = ageOutput.yearsPassedOnJupiter();

}

window.addEventListener("load", function () {
  this.document.querySelector("form#form-input").addEventListener("submit", handleFormComplete);
});

