import GalacticAge from "../src/js/age";

describe("GalacticAge", () => {
  test("should create an Earth age property within the GalacticAge class", () => {
    const myGalacticAge = new GalacticAge(25);
    expect(myGalacticAge.earthAge).toEqual(25);
  });

  test("should calculate the users age in Mercury years", () => {
    const myGalacticAge = new GalacticAge(25);
    expect(myGalacticAge.mercuryAge).toEqual(25 / 0.24);
  });

  test("should calculate the users age in Venus years", () => {
    const myGalacticAge = new GalacticAge(25);
    expect(myGalacticAge.venusAge).toEqual(25 / 0.62);
  });

  test("should calculate the users age in Mars years", () => {
    const myGalacticAge = new GalacticAge(25);
    expect(myGalacticAge.marsAge).toEqual(25 / 1.88);
  });

  test("should calculate the users age in Jupiter years", () => {
    const myGalacticAge = new GalacticAge(25);
    expect(myGalacticAge.jupiterAge).toEqual(25 / 11.86);
  });

  test("should calculate how many Earth years have passed since the users last birthday", () => {
    const myGalacticAge = new GalacticAge(25,10);
    expect(myGalacticAge.yearsPassedOnEarth()).toEqual(25 - 10);
  });

  test("should calculate how many Mercury years have passed since the users last birthday", () => {
    const myGalacticAge = new GalacticAge(25,10);
    expect(myGalacticAge.yearsPassedOnMercury()).toEqual((25 - 10) / 0.24);
  });

  test("should calculate how many Venus years have passed since the users last birthday", () => {
    const myGalacticAge = new GalacticAge(25,10);
    expect(myGalacticAge.yearsPassedOnVenus()).toEqual((25 - 10) / 0.62);
  });

  test("should calculate how many Mars years have passed since the users last birthday", () => {
    const myGalacticAge = new GalacticAge(25,10);
    expect(myGalacticAge.yearsPassedOnMars()).toEqual((25 - 10) / 1.88);
  });

  test("should calculate how many Jupiter years have passed since the users last birthday", () => {
    const myGalacticAge = new GalacticAge(25,10);
    expect(myGalacticAge.yearsPassedOnJupiter()).toEqual((25 - 10) / 11.86);
  });

  test("should calculate how many Earth years till the users next birthday", () => {
    const myGalacticAge = new GalacticAge(25,10,45);
    expect(myGalacticAge.yearsYetToPassOnEarth()).toEqual(45 - 25);
  });

  test("should calculate how many Mercury years till the users next birthday", () => {
    const myGalacticAge = new GalacticAge(25,10,45);
    expect(myGalacticAge.yearsYetToPassOnMercury()).toEqual((45 - 25) / 0.24);
  });

  test("should calculate how many Venus years till the users next birthday", () => {
    const myGalacticAge = new GalacticAge(25,10,45);
    expect(myGalacticAge.yearsYetToPassOnVenus()).toEqual((45 - 25) / 0.62);
  });

  test("should calculate how many Mars years till the users next birthday", () => {
    const myGalacticAge = new GalacticAge(25,10,45);
    expect(myGalacticAge.yearsYetToPassOnMars()).toEqual((45 - 25) / 1.88);
  });

  test("should calculate how many Jupiter years till the users next birthday", () => {
    const myGalacticAge = new GalacticAge(25,10,45);
    expect(myGalacticAge.yearsYetToPassOnJupiter()).toEqual((45 - 25) / 11.86);
  });

});
