const factory = require('../../src/operandFactory');
const NumberOperand = require('../../src/numberOperand');
const WordOperand = require('../../src/wordNumberOperand');

describe("Operand Factory", () => {
  describe("getLeftOperand", () => {
    it("should return numberOperand", () => {
      let numberOperand = factory.getLeftOperand(1, 2);
      expect( numberOperand instanceof NumberOperand).toBe(true);
    });

    it("should return stringOperand", () => {
      let wordOperand = factory.getLeftOperand(2, 3);
      expect( wordOperand instanceof WordOperand).toBe(true);
    });
  });

  describe("getRighttOperand", () => {
    it("should return stringOperand", () => {
      let wordOperand = factory.getRightOperand(1, 4);
      expect( wordOperand instanceof WordOperand).toBe(true);
    });

    it("should return stringOperand", () => {
      let numberOperand = factory.getRightOperand(2, 5);
      expect( numberOperand instanceof NumberOperand).toBe(true);
    });
  });
});