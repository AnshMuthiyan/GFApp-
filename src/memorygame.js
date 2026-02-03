// memorygame.js
// Simple memory matching game. If answer=no, game is impossible (odd number of cards)

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const answer = getQueryParam('answer');

// Card symbols (emojis for fun)
const symbols = ['💖','🌹','🐻','🍫','🎶','🎈','🍰','🧸'];


// Use 5 cards (impossible) for 'no', 6 cards (possible) for 'yes' or default
let cards = [];
if (answer === 'no') {
  // 5 cards: 2 pairs + 1 extra (impossible)
  cards = [symbols[0], symbols[0], symbols[1], symbols[1], symbols[2]];
} else {
  // 6 cards: 3 pairs (possible)
  cards = [symbols[0], symbols[0], symbols[1], symbols[1], symbols[2], symbols[2]];
}

// Shuffle cards
for (let i = cards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [cards[i], cards[j]] = [cards[j], cards[i]];
}


const board = document.getElementById('game-board');
const timerDisplay = document.getElementById('timer');
let flipped = [];
let matched = [];
let timeLeft = 60;
let timerInterval = null;

function renderBoard() {
  board.innerHTML = '';
  cards.forEach((symbol, idx) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    if (flipped.includes(idx) || matched.includes(idx)) {
      cardDiv.classList.add('flipped');
      cardDiv.textContent = symbol;
    } else {
      cardDiv.textContent = '?';
    }
    if (!matched.includes(idx)) {
      cardDiv.onclick = () => handleFlip(idx);
    } else {
      cardDiv.classList.add('matched');
    }
    board.appendChild(cardDiv);
  });
}

function handleFlip(idx) {
  if (flipped.length === 2 || flipped.includes(idx) || matched.includes(idx)) return;
  flipped.push(idx);
  renderBoard();
  if (flipped.length === 2) {
    setTimeout(checkMatch, 800);
  }
}


function checkMatch() {
  const [i, j] = flipped;
  if (cards[i] === cards[j]) {
    matched.push(i, j);
  }
  flipped = [];
  renderBoard();
  // Check for win
  if (matched.length === cards.length) {
    clearInterval(timerInterval);
    setTimeout(() => {
      alert('Congratulations! You completed the game!');
      // Optionally, redirect or show a submit button here
    }, 300);
  }
}

function updateTimer() {
  timerDisplay.textContent = `Time left: ${timeLeft} seconds`;
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    showFailPopup();
  }
}

function showFailPopup() {
  // Create overlay
  const overlay = document.createElement('div');
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(0,0,0,0.7)';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.style.zIndex = 9999;

  const msg = document.createElement('div');
  msg.textContent = 'UH OH, VERIFICATION FAILED';
  msg.style.color = '#fff';
  msg.style.fontSize = '2em';
  msg.style.marginBottom = '30px';

  const btn = document.createElement('button');
  btn.textContent = 'Return to Home Page';
  btn.style.padding = '15px 30px';
  btn.style.fontSize = '1.2em';
  btn.style.borderRadius = '10px';
  btn.style.border = 'none';
  btn.style.background = '#ffb6c1';
  btn.style.color = '#fff';
  btn.style.cursor = 'pointer';
  btn.onclick = () => { window.location.href = 'index.html'; };

  overlay.appendChild(msg);
  overlay.appendChild(btn);
  document.body.appendChild(overlay);
}

function startGame() {
  renderBoard();
  updateTimer();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimer();
  }, 1000);
}

startGame();
