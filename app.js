const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector('#p2button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1display');
const p2Display = document.querySelector('#p2display');
const winningScoreSelect = document.querySelector('#playTo');

let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let isGameOver = false;

p1Button.addEventListener('click', function () {
  if (!isGameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add('has-text-primary');
      p2Display.classList.add('has-text-danger');
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener('click', function () {
  if (!isGameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      isGameOver = true;
      p1Display.classList.add('has-text-danger');
      p2Display.classList.add('has-text-primary');
    }
    p2Display.textContent = p2Score;
  }
});

resetButton.addEventListener('click', reset);

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});

function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('has-text-primary', 'has-text-danger');
  p2Display.classList.remove('has-text-primary', 'has-text-danger');
}
