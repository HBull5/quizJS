const results = document.getElementById('results');
const submit = document.getElementById('submit');

function stringDetails() {
    let input = document.getElementById('input').value;
    const words = input.split(' ');
    let removedWords = words.filter(word => word.length < 4);
    const remainders = words.filter(ele => !removedWords.includes(ele));

    let max = 0;
    let longStr = '';
    for(word of words) {
        if(word.length > max) {
            max = word.length;
            longStr = word;
        }
    }

    let response = `Original String: ${input} <br>`;
    response += `Words under 4 chars: `;
    for(removedWord of removedWords) {
        response += `${removedWord} `;
    }
    response += `<br> Only chars 4 or greater: `;
    for(remainder of remainders) {
        response += `${remainder} `;
    }
    response += `<br> Longest String was ${longStr} with a char count of ${max}`;
    results.innerHTML = response;
}

submit.addEventListener('click', () => {
    stringDetails();
})