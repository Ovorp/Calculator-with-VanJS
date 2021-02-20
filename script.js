const theNums = document.querySelectorAll('[data-number]');
const theOps = document.querySelectorAll('[data-ops]')
const theAc = document.querySelectorAll('[data-ac]')
const theDel = document.querySelectorAll('[data-del]')
const theEqual = document.querySelectorAll('[data-equal]')

theNums.forEach(val => {
    val.addEventListener('click', () => console.log(val))
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

const calculator = {
    currentNumber: '',
    previousNumber: '',
    
    operation() {},
    delete() {},
    display() {
        let bottomOutput = document.querySelector('.bottom-output');
        console.log(bottomOutput)
        bottomOutput.innerText = this.currentNumber;
    },
};
calculator.display()
