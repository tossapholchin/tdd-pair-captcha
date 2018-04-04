const NumberOperand = require('./numberOperand');
const WordOperand = require('./wordNumberOperand');

exports.getLeftOperand = (pattern, number) => {
  if (pattern === 1) {
    return new NumberOperand(number);
  } else {
    return new WordOperand(number);
  }
}

exports.getRightOperand = (pattern, number) => {
  if (pattern === 1) {
    return new WordOperand(number);
  } else {
    return new NumberOperand(number);
  }
}