const Captcha = require("../../src/captcha");
const OperandFactory = require('../../src/operandFactory');

describe("Captcha", () => {
  describe("getLeftOperand", () => {

    it("should call OperandFactory.getLeftOperand", () => {
      spyOn(OperandFactory, "getLeftOperand").and.callThrough();
      let captcha = new Captcha(1, 5, 2, 3);
      captcha.getLeftOperand();
      expect(OperandFactory.getLeftOperand).toHaveBeenCalledWith(1, 5);
    });
  });

  describe("getRightOperand", () => {
    it("should call OperandFactory.getRightOprerand", () => {
      spyOn(OperandFactory, "getRightOperand").and.callThrough();
      let captcha = new Captcha(1, 5, 2, 3);
      captcha.getRightOperand();
      expect(OperandFactory.getRightOperand).toHaveBeenCalledWith(1, 2);
    });

    it("should return One", () => {
      let captcha = new Captcha(1, 1, 1, 3);
      let operand = captcha.getRightOperand();
      expect(operand).toEqual("One");
    });

    it("should return Two", () => {
      let captcha = new Captcha(1, 1, 2, 3);
      let operand = captcha.getRightOperand();
      expect(operand).toEqual("Two");
    });

    it("should return Three", () => {
      let captcha = new Captcha(1, 1, 3, 3);
      let operand = captcha.getRightOperand();
      expect(operand).toEqual("Three");
    });

    it("should return Four", () => {
      let captcha = new Captcha(1, 1, 4, 3);
      let operand = captcha.getRightOperand();
      expect(operand).toEqual("Four");
    });

    it("should return Five", () => {
      let captcha = new Captcha(1, 1, 5, 3);
      let operand = captcha.getRightOperand();
      expect(operand).toEqual("Five");
    });

    it("should return Nine", () => {
      let captcha = new Captcha(1, 1, 9, 3);
      let operand = captcha.getRightOperand();
      expect(operand).toEqual("Nine");
    });
  });

  describe("getOperantor", () => {
    it("should return +", () => {
      let captcha = new Captcha(1, 1, 2, 1);
      let operand = captcha.getOperator();
      expect(operand).toEqual("+");
    });

    it("should return -", () => {
      let captcha = new Captcha(1, 1, 2, 2);
      let operand = captcha.getOperator();
      expect(operand).toEqual("-");
    });

    it("should return *", () => {
      let captcha = new Captcha(1, 1, 2, 3);
      let operand = captcha.getOperator();
      expect(operand).toEqual("*");
    });
  });

  describe("getCaptcha", () => {
    it("should return 1 + One", () => {
      let captcha = new Captcha(1,1,1,1);
      let operand = captcha.getCaptcha();
      expect(operand).toEqual("1 + One");
    });

    it("should return 2 - Seven", () => {
      let captcha = new Captcha(1,2,7,2);
      let operand = captcha.getCaptcha();
      expect(operand).toEqual("2 - Seven");
    });

    it("should return 3 * Five", () => {
      let captcha = new Captcha(1,3,5,3);
      let operand = captcha.getCaptcha();
      expect(operand).toEqual("3 * Five");
    });

    it("should return Five + 1", () => {
      let captcha = new Captcha(2,5,1,1);
      let operand = captcha.getCaptcha();
      expect(operand).toEqual("Five + 1");
    });


    it("should return Six - 3", () => {
      let captcha = new Captcha(2,6,3,2);
      let operand = captcha.getCaptcha();
      expect(operand).toEqual("Six - 3");
    });

    it("should return Seven * 8", () => {
      let captcha = new Captcha(2,7,8,3);
      let operand = captcha.getCaptcha();
      expect(operand).toEqual("Seven * 8");
    });
  });

});