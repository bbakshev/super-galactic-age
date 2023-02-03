import GalacticAge from "../src/js/age";

describe('GalacticAge', () => {
  test('should create an Earth age property within the GalacticAge class', () => {
    const myGalacticAge = new GalacticAge(25);
    expect(myGalacticAge.earthAge).toEqual(25);
  });

  test('should calculate the users age in Mercury years', () => {
    const myGalacticAge = new GalacticAge(25);
    expect(myGalacticAge.mercuryAge).toEqual(25 * 0.24);
  });

  test('should calculate the users age in Venus years', () => {
    const myGalacticAge = new GalacticAge(25);
    expect(myGalacticAge.venusAge).toEqual(25 / 0.62).toFixed(2);
  });

});