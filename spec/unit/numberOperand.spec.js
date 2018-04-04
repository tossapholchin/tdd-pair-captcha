const NumberOperand = require('../../src/numberOperand');

describe("numberOperand", () => {
  describe("getValue", () => {
    it("should return 1", () => {
      let numberOperand = new NumberOperand(1);
      let value = numberOperand.getValue();
      expect(value).toEqual("1");
    });

    it("should return 4", () => {
      let numberOperand = new NumberOperand(4);
      let value = numberOperand.getValue();
      expect(value).toEqual("4");
    });

    it("should return 7", () => {
      let numberOperand = new NumberOperand(7);
      let value = numberOperand.getValue();
      expect(value).toEqual("7");
    });
  });
});