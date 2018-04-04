class NumberOperand {
  constructor(operand) {
    this.operand = operand;
  }

  getValue() {
    return this.operand.toString();
  }
}

module.exports = NumberOperand;