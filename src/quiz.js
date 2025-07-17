const quizData = [
  {
    question: "How long did we talk after I first asked you out",
    options: ["2 hours", "30 minutes", "24 hours", "3 hours"],
    correct: "3 hours",
  },
  {
    question: "What food did I order at Chuy's",
    options: ["A fajita", "Roti and Curry", "enchiladas", "Burrito"],
    correct: "Burrito",
  },
  {
    question: "Out of 10, how great are 3d printed gifts?",
    options: ["1", "7", "5", "10"],
    correct: "1",
  },
  {
    question: "What do we call a joke that only one person got?",
    options: ["Well, Actually..", "Huh", "Good one", "Okay buddy"],
    correct: "Good one",
  },
];

let currentQuestion = 0;
let score = 0;

window.addEventListener("DOMContentLoaded", () => {
  const questionElem = document.getElementById("quizQuestion");
  const optionsElem = document.getElementById("quizOptions");
  const feedbackElem = document.getElementById("quizFeedback");

  function showQuestion() {
    if (currentQuestion >= quizData.length) {
      questionElem.textContent = `All done! 💖 You got ${score} out of ${quizData.length} right!`;
      optionsElem.innerHTML = "";
      feedbackElem.textContent = "I’m so proud of you either way 🥰";
      return;
    }

    const q = quizData[currentQuestion];
    questionElem.textContent = q.question;
    optionsElem.innerHTML = "";
    feedbackElem.textContent = "";

    q.options.forEach((opt) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.addEventListener("click", () => {
        if (opt === q.correct) {
          feedbackElem.textContent = "Correct! 💯";
          score++;
        } else {
          feedbackElem.textContent = `Oops! blud was not locked in "${q.correct}" 😅`;
        }

        setTimeout(() => {
          currentQuestion++;
          showQuestion();
        }, 1500);
      });
      optionsElem.appendChild(btn);
    });
  }

  showQuestion();
});
