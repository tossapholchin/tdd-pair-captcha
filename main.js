function generateCaptcha(reverse) {
  let a = randomNumber();
  let b = convertStringNumber(randomNumber());
  let c = randomOpertor();
  if(reverse){
    console.log( b + " " + c + " " + a );
    return b + " " + c + " " + a
  } else {
    console.log( a + " " + c + " " + b );
    return a + " " + c + " " + b
  }
}

function randomNumber() {
  return Math.floor((Math.random()*9)+1);
}

function convertStringNumber(number) {
  let a = ["", "One", "Two", "Three", "Four", "Fight", "Six", "Seven", "Eight", "Nine"];
  return a[number];
}

function randomOpertor() {
  let operator = ["+","-","*"]
  let a = Math.floor(Math.random()*3);
  return operator[a];
}

generateCaptcha();
generateCaptcha(true);

module.exports = {
  generateCaptcha,
  randomNumber,
  convertStringNumber,
  randomOpertor
}