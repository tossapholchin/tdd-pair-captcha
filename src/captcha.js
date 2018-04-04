const NumberOperand = require('./numberOperand');
const WordNumberOperand = require('./wordNumberOperand');
const OperandFactory = require('./operandFactory');

class Captcha {
  constructor(pattern, leftOperand, rightOperand, operator) {
    this.pattern = pattern;
    this.leftOperand = leftOperand;
    this.rightOperand = rightOperand;
    this.operator = operator;

    this.wordNumber = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"];
    this.wordOperator = ["+","-","*"]
  }
  getLeftOperand() {
    return OperandFactory.getLeftOperand(this.pattern, this.leftOperand).getValue();
  }

  getRightOperand() {
    return OperandFactory.getRightOperand(this.pattern, this.rightOperand).getValue();
  }

  getOperator() {
    return this.wordOperator[this.operator - 1];
  }

  getCaptcha() {
    return `${this.getLeftOperand()} ${this.getOperator()} ${this.getRightOperand()}`;
  }
}

module.exports = Captcha;