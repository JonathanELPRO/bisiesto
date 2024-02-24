import determinarBisiesto from "./bisiestoYorN.js";

describe("BisiestoYorN", () => {
  it("Deberia retornar que el año ingresado es bisiesto solamente sabiendo si es divisible por 400", () => {
    expect(determinarBisiesto(800)).toEqual("Es bisiesto");
  });
  it("Deberia retornar que el año ingresado no es bisiesto solamente sabiendo que es divisible por 100 pero no por 400", () => {
    expect(determinarBisiesto(2100)).toEqual("No es bisiesto");
  });
});