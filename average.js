const getAverage = arr => {
    // Sum the values  from the array

    const reducer = (total, currentValue) => total + currentValue

    const sum = arr.reduce(reducer);
    //Get the Lenght of the array
    //Divide the array sum by the length

    return sum;
}


console.log(getAverage([1, 2, 3, 4, 6]))