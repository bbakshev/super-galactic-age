export default class GalacticAge {
  constructor(earthAge, pastAge, futureAge, mercuryAge, venusAge, marsAge) {
    this.earthAge = earthAge;
    this.pastAge = pastAge;
    this.futureAge = futureAge;
    this.mercuryAge = parseFloat(earthAge / 0.24);
    this.venusAge = parseFloat(earthAge / 0.62);
    this.marsAge = parseFloat(earthAge / 1.88);
  }
}
