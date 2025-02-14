// console.log('Scaler is awsmm')

// console.log(global)

// const calculator = require('./calculator')
// calculator.addition(2,5)
// calculator.substraction(2,5)
// calculator.multiplication(2,5)
// calculator.division(2,5)
// calculator.sqrt(25)

// Create a Calculator
const cp = require('child_process')
// cp.execSync('calc')

//Open Chrome
// cp.execSync('start chrome')

// Open a Link
// cp.execSync('start chrome http://vlabs.iitkgp.ac.in/vlt/')

console.log('output'+cp.execSync('node demo.js'))
