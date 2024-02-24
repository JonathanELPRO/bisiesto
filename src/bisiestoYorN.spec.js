import determinarBisiesto from "./bisiestoYorN.js";

describe("BisiestoYorN", () => {
  it("Deberia retornar que el año ingresado es bisiesto solamente sabiendo si es divisible por 400", () => {
    expect(determinarBisiesto(800)).toEqual("Es bisiesto");
  });
});