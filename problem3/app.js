const results = document.getElementById('results');
const paint = document.getElementById('paint');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const rollCall = document.getElementById('rollCall');

let barn = {
    color: 'red',
    animals: {
        chickens: 15,
        cows: 2,
        piggys: 4
    },
    doors: 2,
    paint(color) {
        let oldColor = this.color;
        this.color = color;
        results.innerHTML = `You repainted the ${oldColor} barn ${this.color}`;
    },
    decrementAnimal(dead) {
        let qty = prompt(`How many ${dead} died?`);
        for(animal in this.animals) {
            if(animal == dead) {
                this.animals[animal] -= Number(qty);
            }
        }
    }, 
    incrementAnimal(born) {
        let qty = prompt(`How many ${born} were born?`);
        for(animal in this.animals) {
            if(animal == born) {
                this.animals[animal] += Number(qty);
            }
        }
    },
    animalRollCall() {
        let result = ``;
        for(animal in this.animals) {
            result += `${animal}: ${this.animals[animal]} `;
        }
        results.innerHTML = result;
    }
}

paint.addEventListener('click', () => {
    let color = document.getElementById('color').value;
    barn.paint(color);
})

rollCall.addEventListener('click', () => {
    barn.animalRollCall();
})

add.addEventListener('click', () => {
    let animal = document.getElementById('animal').value;
    barn.incrementAnimal(animal);
    barn.animalRollCall();
})

sub.addEventListener('click', () => {
    let animal = document.getElementById('animal').value;
    barn.decrementAnimal(animal);
    barn.animalRollCall();
})