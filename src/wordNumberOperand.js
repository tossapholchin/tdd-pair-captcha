class WordNumberOperand {
  constructor(operand) {
    this.operand = operand;
    this.wordNumber = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"]; 
  }

  getValue() {
    return this.wordNumber[this.operand];
  }
}

module.exports = WordNumberOperand;