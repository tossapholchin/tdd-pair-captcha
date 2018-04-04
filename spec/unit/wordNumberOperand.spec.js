const WordNumberOperand = require('../../src/wordNumberOperand');

describe("word number operand", () => {
  describe("getValue", () => {
    it("should return One", () => {
      const wordNumberOperand = new WordNumberOperand(1);
      const value = wordNumberOperand.getValue();
      expect(value).toEqual("One");
    });

    it("should return Five", () => {
      const wordNumberOperand = new WordNumberOperand(5);
      const value = wordNumberOperand.getValue();
      expect(value).toEqual("Five");
    });

    it("should return Nine", () => {
      const wordNumberOperand = new WordNumberOperand(9);
      const value = wordNumberOperand.getValue();
      expect(value).toEqual("Nine");
    });
  });
});