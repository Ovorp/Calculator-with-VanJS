const theNums = document.querySelectorAll('[data-number]');
const theOps = document.querySelectorAll('[data-ops]');
const theAc = document.querySelectorAll('[data-ac]');
const theDel = document.querySelectorAll('[data-del]');
const theEqual = document.querySelectorAll('[data-equal]');

//calc object

const calculator = {
  currentNumber: '',
  previousNumber: '',
  total: '',
  currentOps: '',

  numberToDisplay(val) {
    this.currentNumber += val.innerText.toString();
    this.display();
  },
  operation(val) {
    let ops = val.innerText;
    let currentOps = this.currentOps;
    if (currentOps) {
      switch (currentOps) {
        case '+':
          this.total =
            parseFloat(this.previousNumber) + parseFloat(this.currentNumber);
          break;
        case '-':
          this.total =
            parseFloat(this.previousNumber) - parseFloat(this.currentNumber);
          break;
        case '/':
          this.total =
            parseFloat(this.previousNumber) / parseFloat(this.currentNumber);
          break;
        case '*':
          this.total =
            parseFloat(this.previousNumber) * parseFloat(this.currentNumber);
          break;
      }
      this.currentOps = ops;
      this.previousNumber = this.total;
      this.currentNumber = '';

      this.display(this.total);
    } else {
      this.currentOps = ops;
      this.previousNumber = parseFloat(this.currentNumber) + ops;
      this.currentNumber = '';
      this.display();
    }
  },
  delete() {
    this.currentNumber = ' ';
  },
  display(total) {
    let bottomOutput = document.querySelector('.bottom-output');
    let topOutput = document.querySelector('.top-output');

    total
      ? (topOutput.innerHTML = total)
      : (topOutput.innerHTML = this.previousNumber);

    bottomOutput.innerText = this.currentNumber;

    console.log(
      this.currentNumber,
      'currentnum',
      this.previousNumber,
      'previousnum',
      this.currentOps,
      'ops',
      this.total,
      'total'
    );
  },
  equal(val) {
    this.operation(val);
    this.display(this.total);

    this.currentNumber = '';
    this.previousNumber = '';
    this.total = '';
    this.currentOps = '';
  },
  ac() {
    (this.currentNumber = ''),
      (this.previousNumber = ''),
      (this.total = ''),
      (this.currentOps = ''),
      this.display();
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
  val.addEventListener('click', () => {
    calculator.ac();
  });
});

theDel.forEach((val) => {
  val.addEventListener('click', () => {
    calculator.delete();
  });
});

theEqual.forEach((val) => {
  val.addEventListener('click', () => {
    calculator.equal(val);
    // this doesn't quite work there is an issue when you click '=' and then press operator
  });
});
