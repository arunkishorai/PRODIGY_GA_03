function buildMarkovChain(text, n) {
    const words = text.split(/\s+/);  
    const chain = {};  

    for (let i = 0; i <= words.length - n; i++) {
        const key = words.slice(i, i + n).join(' '); 
        const nextWord = words[i + n]; 

        if (!chain[key]) {
            chain[key] = [];
        }
        if (nextWord) {
            chain[key].push(nextWord);
        }
    }

    return chain;
}

function generateTextFromChain(chain, length, n) {
    const keys = Object.keys(chain); 
    if (keys.length === 0) return "Not enough data to generate text."; 
    let currentState = keys[Math.floor(Math.random() * keys.length)];
    const generated = currentState.split(' ');

    for (let i = 0; i < length - n; i++) {
        const nextWords = chain[currentState]; 
        if (!nextWords || nextWords.length === 0) break; 

        const nextWord = nextWords[Math.floor(Math.random() * nextWords.length)];
        generated.push(nextWord); 
        currentState = generated.slice(-n).join(' ');
    }

    return generated.join(' '); 
}

function generateText() {
    const inputText = document.getElementById('inputText').value;
    const order = parseInt(document.getElementById('order').value, 10);
    const length = parseInt(document.getElementById('length').value, 10);

    if (!inputText) {
        document.getElementById('outputText').innerText = "Please provide some text to generate from.";
        return;
    }

    const chain = buildMarkovChain(inputText, order);

    const generatedText = generateTextFromChain(chain, length, order);

    document.getElementById('outputText').innerText = generatedText;
}
