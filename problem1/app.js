const add = document.getElementById('add');
const sub = document.getElementById('sub');
const mul = document.getElementById('mul');
const div = document.getElementById('div');
const result = document.getElementById('result');

add.addEventListener('click', () => {
    let uno = document.getElementById('uno').value;
    let dos = document.getElementById('dos').value;
    if(isNaN(uno) || isNaN(dos)) {
        result.innerHTML = 'Invalid input! Try again!';
    } else {
        result.innerHTML = (Number(uno) + Number(dos)).toFixed(2);
        return (Number(uno) + Number(dos)).toFixed(2);
    }
});

sub.addEventListener('click', () => {
    let uno = document.getElementById('uno').value;
    let dos = document.getElementById('dos').value;
    if(isNaN(uno) || isNaN(dos)) {
        result.innerHTML = 'Invalid input! Try again!';
    } else {
        result.innerHTML = (Number(uno) - Number(dos)).toFixed(2);
        return (Number(uno) - Number(dos)).toFixed(2);
    }
});

mul.addEventListener('click', () => {
    let uno = document.getElementById('uno').value;
    let dos = document.getElementById('dos').value;
    if(isNaN(uno) || isNaN(dos)) {
        result.innerHTML = 'Invalid input! Try again!';
    } else {
        (Number(uno) * Number(dos)).toFixed(2);
        return (Number(uno) * Number(dos)).toFixed(2);
    }
});

div.addEventListener('click', () => {
    let uno = document.getElementById('uno').value;
    let dos = document.getElementById('dos').value;
    if(isNaN(uno) || isNaN(dos)) {
        result.innerHTML = 'Invalid input! Try again!';
    } else if(dos == 0) {
        result.innerHTML = 'You cannot divide by zero! Try again!';
    } else {
        result.innerHTML = (Number(uno) / Number(dos)).toFixed(2);
        return (Number(uno) / Number(dos)).toFixed(2);
    }
});