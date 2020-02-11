const add = document.getElementById('add');
const sub = document.getElementById('sub');
const mul = document.getElementById('mul');
const div = document.getElementById('div');
const result = document.getElementById('result');

function addition(x, y) {
    if(x == '' || y == '') {
        result.innerHTML = 'Invalid input! Try again!';
    } else {
        result.innerHTML = (Number(x) + Number(y)).toFixed(2);
        return (Number(x) + Number(y)).toFixed(2);
    }
}

function subtraction(x, y) {
    if(x == '' || y == '') {
        result.innerHTML = 'Invalid input! Try again!';
    } else {
        result.innerHTML = (Number(x) - Number(y)).toFixed(2);
        return (Number(x) - Number(y)).toFixed(2);
    }
}

function multiplication(x, y) {
    if(x == '' || y == '') {
        result.innerHTML = 'Invalid input! Try again!';
    } else {
        result.innerHTML = (Number(x) * Number(y)).toFixed(2);
        return (Number(x) * Number(y)).toFixed(2);
    }
}

function division(x, y) {
    if(x == '' || y == '') {
        result.innerHTML = 'Invalid input! Try again!';
    } else if(y == 0) {
        result.innerHTML = 'You cannot divide by zero! Try again!';
    } else {
        result.innerHTML = (Number(x) / Number(y)).toFixed(2);
        return (Number(x) / Number(y)).toFixed(2);
    }
}

add.addEventListener('click', () => {
    let uno = document.getElementById('uno').value;
    let dos = document.getElementById('dos').value;
    addition(uno, dos);
});

sub.addEventListener('click', () => {
    let uno = document.getElementById('uno').value;
    let dos = document.getElementById('dos').value;
    subtraction(uno, dos);
});

mul.addEventListener('click', () => {
    let uno = document.getElementById('uno').value;
    let dos = document.getElementById('dos').value;
    multiplication(uno, dos);
});

div.addEventListener('click', () => {
    let uno = document.getElementById('uno').value;
    let dos = document.getElementById('dos').value;
    division(uno, dos);
});