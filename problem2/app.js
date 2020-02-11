const results = document.getElementById('results');
const submit = document.getElementById('submit');

function longestWord() {
    let input = document.getElementById('input').value;
    let words = input.split(" ");
    let longest = 0;
    let removed = [];
    for(word of words) {
        if(word.length < 4) {
            if(word != ' ') {
                removed.push(word);
            }
        } else if(word.length > longest) {
            longest = word.length;
        }
    }
    let removedChars = ``;
    removed.forEach((word) => {
        removedChars += `${word} `;
    })
    let remainder = ``;
    // I dont like this but it works for the not destroying the original array :/
    words.forEach((word) => {
        if(!removed.includes(word)) {
            remainder += `${word} `;
        }
    })
    let response = `Longest No Chars: ${longest} Removed: ${removedChars} Remainding Text: ${remainder}`;
    results.innerHTML = response;
}

submit.addEventListener('click', () => {
    longestWord();
});