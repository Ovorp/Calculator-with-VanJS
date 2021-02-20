const theNums = document.querySelectorAll('[data-number]');
const theOps = document.querySelectorAll('[data-ops]')
const theAc = document.querySelectorAll('[data-ac]')
const theDel = document.querySelectorAll('[data-del]')
const theEqual = document.querySelectorAll('[data-equal]')

const calculator = {
    currentNumber: ' ',
    previousNumber: ' ',
    
    numberToDisplay(val) {
        this.currentNumber = val.innerText;
        this.display();
        console.log(this.currentNumber)
    },
    operation() {},
    delete() {},
    display() {
        let bottomOutput = document.querySelector('.bottom-output');
        let topOutput = document.querySelector('.top-output')
        console.log(bottomOutput)
        topOutput.innerHTML = this.previousNumber;
        bottomOutput.innerText = this.currentNumber;
    },
};

theNums.forEach(val => {
    val.addEventListener('click', () => {
        calculator.numberToDisplay(val);
    })
})

theOps.forEach(val => {
    val.addEventListener('click', () => console.log(val))
})

theAc.forEach(val => {
    val.addEventListener('click', () => console.log(val))
})

theDel.forEach(val => {
    val.addEventListener('click', () => console.log(val))
})

theEqual.forEach(val => {
    val.addEventListener('click', () => console.log(val))
})



