// memorygame.js
// Simple memory matching game. If answer=no, game is impossible (odd number of cards)

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const answer = getQueryParam('answer');

// Card symbols (emojis for fun)
const symbols = ['💖','🌹','🐻','🍫','🎶','🎈','🍰','🧸'];

let cards = [];
if (answer === 'no') {
  // Odd number of cards (impossible)
  cards = [...symbols, ...symbols.slice(0, symbols.length - 1)]; // 7 pairs + 1 extra = 15 cards
  document.getElementById('impossible-msg').textContent = "You said no... This game is impossible!";
} else {
  // Even number of cards (possible)
  cards = [...symbols, ...symbols]; // 8 pairs = 16 cards
}

// Shuffle cards
for (let i = cards.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [cards[i], cards[j]] = [cards[j], cards[i]];
}

const board = document.getElementById('game-board');
let flipped = [];
let matched = [];

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
}

renderBoard();
