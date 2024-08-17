
document.getElementById('encryptButton').addEventListener('click', () => {
    const text = document.getElementById('inputText').value;
    const encryptedText = text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById('message').innerText = encryptedText || 'Ningún mensaje fue encontrado';
});


document.getElementById('decryptButton').addEventListener('click', () => {
    const text = document.getElementById('inputText').value;
    const decryptedText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('message').innerText = decryptedText || 'Ningún mensaje fue encontrado';
});

