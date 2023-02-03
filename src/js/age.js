export default class GalacticAge {
  constructor(earthAge, pastAge, futureAge, mercuryAge) {
    this.earthAge = earthAge;
    this.pastAge = pastAge;
    this.futureAge = futureAge;
    this.mercuryAge = parseFloat((earthAge * .24).toFixed(2));
  }

}