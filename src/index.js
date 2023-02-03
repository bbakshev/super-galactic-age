import GalacticAge from './js/age.js';
import './css/styles.css';

function handleFormComplete(event) {
  event.preventDefault();

  const presentAgeInput = document.getElementById("present-age").value;
  const pastAgeInput = document.getElementById("past-age").value;
  const futureAgeInput = document.getElementById("future-age").value;

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

  // display output for the future age
  document.getElementById("future-earth").innerText = ageOutput.yearsYetToPassOnEarth();
  document.getElementById("future-mercury").innerText = ageOutput.yearsYetToPassOnMercury();
  document.getElementById("future-venus").innerText = ageOutput.yearsYetToPassOnVenus();
  document.getElementById("future-mars").innerText = ageOutput.yearsYetToPassOnMars();
  document.getElementById("future-jupiter").innerText = ageOutput.yearsYetToPassOnJupiter();


}

window.addEventListener("load", function () {
  this.document.querySelector("form#form-input").addEventListener("submit", handleFormComplete);
});

