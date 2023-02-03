export default class GalacticAge {
  constructor(earthAge, pastAge, futureAge) {
    this.earthAge = earthAge;
    this.pastAge = pastAge;
    this.futureAge = futureAge;
    this.mercuryAge = parseFloat(earthAge / 0.24).toFixed();
    this.venusAge = parseFloat(earthAge / 0.62).toFixed();
    this.marsAge = parseFloat(earthAge / 1.88).toFixed();
    this.jupiterAge = parseFloat(earthAge / 11.86).toFixed();
  }
  yearsPassedOnEarth() {
    return this.earthAge - this.pastAge;
  }

  yearsPassedOnMercury() {
    return parseFloat(this.yearsPassedOnEarth() / 0.24).toFixed();
  }

  yearsPassedOnVenus() {
    return parseFloat(this.yearsPassedOnEarth() / 0.62).toFixed();
  }

  yearsPassedOnMars() {
    return parseFloat(this.yearsPassedOnEarth() / 1.88).toFixed();
  }

  yearsPassedOnJupiter() {
    return parseFloat(this.yearsPassedOnEarth() / 11.86).toFixed();
  }

  yearsYetToPassOnEarth() {
    return this.futureAge - this.earthAge;
  }

  yearsYetToPassOnMercury() {
    return parseFloat(this.yearsYetToPassOnEarth() / 0.24);
  }

  yearsYetToPassOnVenus() {
    return parseFloat(this.yearsYetToPassOnEarth() / 0.62);
  }

  yearsYetToPassOnMars() {
    return parseFloat(this.yearsYetToPassOnEarth() / 1.88);
  }

  yearsYetToPassOnJupiter() {
    return parseFloat(this.yearsYetToPassOnEarth() / 11.86);
  }
}
