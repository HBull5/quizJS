function addition(x, y) {
    return (Number(x) + Number(y)).toFixed(2);
}

function subtraction(x, y) {
    return (Number(x) - Number(y)).toFixed(2);
}

function multiplication(x, y) {
        return (Number(x) * Number(y)).toFixed(2);
}

function division(x, y) {
    return (Number(x) / Number(y)).toFixed(2)
}

module.exports.addition = addition;
module.exports.subtraction = subtraction;
module.exports.multiplication = multiplication;
module.exports.division = division;