const toThePowerof = (num, exp) => {
    const newItems = Array(exp).fill(num);
    const reducer = (total, currentValue) => total * currentValue;
    return newItems.reduce(reducer);
};

console.log(Array(3).fill(2));
console.log(toThePowerof(2, 3))