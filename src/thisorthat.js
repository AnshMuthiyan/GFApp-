const questions = [
  {
    prompt: "What's my favorite place for a walk?",
    options: ["A Beach in occasional wave area", "A Park under the tree shade", "Around campus, but only grassy areas", "Under the shade in a dog park"],
    yourPick: "Under the shade in a dog park"
  },
  {
    prompt: "Best weather for exam week",
    options: ["Overcast", "HOT", "Nice, 75 degrees LA type weather", "WINDYYY"],
    yourPick: "HOT"
  },
  {
    prompt: "What kind of pet are YOU",
    options: ["Great Dane", "Raccon", "Orange Cat", "Parrot"],
    yourPick: "Parrot"
  },
  {
    prompt: "What season are YOU",
    options: ["Spring", "Summer", "Fall", "Pre-spring"],
    yourPick: "Spring"
  },
  {
    prompt: "If I was an animal ...",
    options: ["I would be a giraffe", "I would be dead", "I would be a wolf", "I would still love you :)"],
    yourPick: "I would be a wolf"
  },
  
];

let current = 0;

window.addEventListener("DOMContentLoaded", () => {
  const questionText = document.getElementById("questionText");
  const choicesContainer = document.getElementById("choicesContainer");
  const yourPick = document.getElementById("yourPick");

  function showQuestion() {
    // Reset
    choicesContainer.innerHTML = "";
    yourPick.textContent = "";

    if (current >= questions.length) {
      questionText.textContent = "That’s all for now 💕";
      return;
    }

    const q = questions[current];
    questionText.textContent = q.prompt;

    q.options.forEach((option) => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.addEventListener("click", () => {
        yourPick.textContent = `I would've picked: ${q.yourPick}`;
        setTimeout(() => {
          current++;
          showQuestion();
        }, 3000); // short pause before next question
      });
      choicesContainer.appendChild(btn);
    });
  }

  showQuestion();
});
