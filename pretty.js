const prettyPrice = (groosPrice, extension) => {
    if(Number.isInteger(extension)) {
        extension = extension * 0.01;
    }
    return Math.floor(groosPrice) + extension;
};



console.log(prettyPrice(9, 99))