const theNums = document.querySelectorAll('[data-number]');
const theOps = document.querySelectorAll('[data-ops]');
const theAc = document.querySelectorAll('[data-ac]');
const theDel = document.querySelectorAll('[data-del]');
const theEqual = document.querySelectorAll('[data-equal]');

//calc object

const calculator = {
  currentNumber: '',
  previousNumber: '',
  ops: '',

  numberToDisplay(val) {
    this.currentNumber += val.innerText.toString();
    // this.previousNumber = parseFloat(this.currentNumber);
    this.display();
  },
  operation(val) {
    switch (val) {
      case '+':
        // console.log(
        //   this.previousNumber,
        //   typeof this.previousNumber,
        //   'prev',
        //   this.currentNumber,
        //   typeof this.currentNumber,
        //   'current',
        //   parseFloat(this.currentNumber),
        //   typeof parseFloat(this.currentNumber),
        //   'parse'
        // );
        // console.log(this.previousNumber, this.currentNumber);
        // this.previousNumber += parseFloat(this.currentNumber);
        // console.log(this.previousNumber, typeof this.previousNumber, 'prev');
        // this.currentNumber = '';
        // console.log(this.previousNumber, typeof this.previousNumber, 'prev');
        // // this.display();
        // console.log(this.previousNumber, typeof this.previousNumber, 'prev');
        if (this.previousNumber === '') {
          this.previousNumber = parseFloat(this.currentNumber) + this.ops;
          this.currentNumber = '';
        } else {
          this.previousNumber += parseFloat(this.currentNumber);
          this.currentNumber = '';
        }
        this.display();
        break;
        break;
      case '-':
        this.previousNumber -= parseFloat(this.currentNumber);
        this.currentNumber = '';
        this.display();
        break;
      case '/':
        if (this.previousNumber === '') {
          this.previousNumber = parseFloat(this.currentNumber);
          this.currentNumber = '';
        } else {
          this.previousNumber /= parseFloat(this.currentNumber);
          this.currentNumber = '';
        }
        this.display();
        break;
      case '*':
        if (this.previousNumber === '') {
          this.previousNumber = parseFloat(this.currentNumber);
          this.currentNumber = '';
        } else {
          this.previousNumber *= parseFloat(this.currentNumber);
          this.currentNumber = '';
        }
        this.display();
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
  val.addEventListener('click', () => {
    calculator.delete();
  });
});

theDel.forEach((val) => {
  val.addEventListener('click', () => console.log(val));
});

theEqual.forEach((val) => {
  val.addEventListener('click', () => console.log(val));
});
