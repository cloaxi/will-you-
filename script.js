const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const catGif = document.getElementById('cat-gif');

function handleYes() {
    catGif.src = 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmVzZDcxZWU2ODM5dDRudzFiM252bjZkYmR2NDNyNjJ5Y3R0bDR6eiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/wr7oA0rSjnWuiLJOY5/giphy.gif';
    catGif.style.display = 'block';
    catGif.style.left = '50%';
    catGif.style.top = '50%';
    catGif.style.transform = 'translate(-50%, -50%)';
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
}

function handleNo() {
    const x = Math.random() * (window.innerWidth - noButton.clientWidth);
    const y = Math.random() * (window.innerHeight - noButton.clientHeight);
    
    // Move the "No" button
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
