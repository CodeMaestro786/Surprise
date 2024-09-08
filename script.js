document.getElementById('yes-button').onclick = function() {
    document.getElementById('initial-buttons').style.display = 'none';
    document.getElementById('follow-up').style.display = 'block';
    document.getElementById('follow-up-message').innerText = "How much?";
    createNumberButtons();
};

document.getElementById('no-button').onclick = function() {
    document.getElementById('initial-buttons').style.display = 'none';
    document.getElementById('follow-up').style.display = 'block';
    document.getElementById('follow-up-message').innerText = "GO DIE IN A HOLE";
};

function createNumberButtons() {
    const numberButtons = document.getElementById('number-buttons');
    numberButtons.innerHTML = ''; // Clear previous buttons
    for (let i = 1; i <= 10; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        button.onclick = function() {
            if (i > 8) {
                alert("AWWWW, I MISSED YOU TOOO😘😘😘");
            } else {
                alert("OKAY");
            }
        };
        numberButtons.appendChild(button);
    }
}
