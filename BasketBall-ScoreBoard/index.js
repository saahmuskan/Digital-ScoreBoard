let homeScore = 0;
let guestScore = 0;

function updateScore(team, points) {
  if (team === 'home') {
    homeScore += points;
    document.getElementById('home-score').textContent = homeScore;
  } else if (team === 'guest') {
    guestScore += points;
    document.getElementById('guest-score').textContent = guestScore;
  }
}

let seconds = 0;
function startTimer() {
  setInterval(() => {
    seconds++;
    const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById('timer').textContent = `${mins}:${secs}`;
  }, 1000);
}

startTimer();
