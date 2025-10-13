function getHole(index) {
    return document.getElementById(`hole${index}`);
}
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

function resetGame() {
    deadCounter.textContent = '0';
    lostCounter.textContent = '0';
}

function checkGameStatus() {
    const dead = parseInt(deadCounter.textContent);
    const lost = parseInt(lostCounter.textContent);
    
    if (dead >= 10) {
        alert('Поздравляем! Вы победили!');
        resetGame();
    } else if (lost >= 5) {
        alert('Игра окончена! Вы проиграли!');
        resetGame();
    }
}
for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);   
    hole.addEventListener('click', function() {
        if (this.className.includes('hole_has-mole')) {
            let dead = parseInt(deadCounter.textContent);
            deadCounter.textContent = dead + 1;
        } else {
            let lost = parseInt(lostCounter.textContent);
            lostCounter.textContent = lost + 1;
        }
        checkGameStatus();
    });
}