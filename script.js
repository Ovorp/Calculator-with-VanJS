const theNums = document.querySelectorAll('[data-number]');
const theOps = document.querySelectorAll('[data-ops]');
const theAc = document.querySelectorAll('[data-ac]');
const theDel = document.querySelectorAll('[data-del]');
const theEqual = document.querySelectorAll('[data-equal]');

//calc object

const calculator = {
  currentNumber: ' test',
  previousNumber: 'test ',

  numberToDisplay(val) {
    this.currentNumber += val.innerText.toString();
    this.display();
  },
  operation(val) {
    let ops = val.innerText;
    console.log(this.currentNumber, this.previousNumber);
    switch (ops) {
      case '+':
        console.log('this is the plus');
        break;
      case '-':
        console.log('this is the minus');
        break;
      case '/':
        console.log('this is the division');
        break;
      case '*':
        console.log('this is the multiplication');
        break;
    }
  },
  delete() {
    this.currentNumber = ' ';
    this.previousNumber = ' ';
  },
  display() {
    let bottomOutput = document.querySelector('.bottom-output');
    let topOutput = document.querySelector('.top-output');
    topOutput.innerHTML = this.previousNumber;
    bottomOutput.innerText = this.currentNumber;
  },
};

//Event Listener

theNums.forEach((val) => {
  val.addEventListener('click', () => {
    calculator.numberToDisplay(val);
  });
});

theOps.forEach((val) => {
  val.addEventListener('click', () => {
    calculator.operation(val);
  });
});

theAc.forEach((val) => {
  val.addEventListener('click', () => console.log(val));
});

theDel.forEach((val) => {
  val.addEventListener('click', () => console.log(val));
});

theEqual.forEach((val) => {
  val.addEventListener('click', () => console.log(val));
});
