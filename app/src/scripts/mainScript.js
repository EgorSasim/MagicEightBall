import { MAGIC_EIGHT_ANSWERS as ANSWERS } from "./magicAnswers.js";
import { showTriangle } from "./animation.js";

const askQuestionHandler = document.querySelector(".magic-eight__question");

askQuestionHandler.addEventListener("click", () => {
  showTriangle(getRandomAnswer(ANSWERS));
});

function getRandomAnswer(answers) {
  const answerType =
    Object.keys(answers)[
      Math.floor(Object.keys(answers).length * Math.random())
    ];
  const answer = Object.keys(answers[answerType])[
    Math.floor(Object.keys(answers[answerType]).length * Math.random())
  ];
  return [answerType, answers[answerType][answer]];
}
