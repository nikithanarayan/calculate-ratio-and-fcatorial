
const ratioOfTwoNumbers  = require("../ratio/index");
const factorial = require("../factorial/index");

const ratioAndFactorial = (num1,num2,num3) => {
    const ratio = ratioOfTwoNumbers(num1,num2);
    const fact = factorial(num3);
        return {ratio, fact};
}
module.exports = ratioAndFactorial;