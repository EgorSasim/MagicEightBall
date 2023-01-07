import { MAGIC_EIGHT_ANSWERS } from "./magicAnswers.js";

const imageHandler = document.querySelector(".magic-eight__image");
const mainHandler = document.querySelector(".magic-eight");
const answerHandler = document.querySelector(".magic-eight__answer");

const CANVAS = createCanvas(245, 240);

function showTriangle(answerInfo) {
  const [answerType, answer] = answerInfo;
  placeCanvas(CANVAS, 130, 135);
  drawTriangle(CANVAS, answerType);
  showAnswer(answer);
}

function createCanvas(width, height) {
  const canvas = document.createElement("canvas");
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
  canvas.style.transition = "1s";
  return canvas;
}

function placeCanvas(canvas, x, y) {
  mainHandler.appendChild(canvas);
  canvas.style.position = "absolute";
  canvas.style.left = imageHandler.offsetLeft + x + "px";
  canvas.style.top = imageHandler.offsetTop + y + "px";
}

function drawTriangle(canvas, answerType) {
  if (canvas.getContext) {
    canvas.width = canvas.width;
    const context = canvas.getContext("2d");
    switch (answerType) {
      case "AFFIRMATIVE":
        drawPositiveTriangle(context);
        break;
      case "COMMITIAL":
        drawCommitialTriangle(context);
        break;
      case "NEGATIVE":
        drawNegativeTriangle(context);
        break;
      default:
        console.log("wow");
    }
  }
}

function drawNegativeTriangle(context) {
  context.fillStyle = "#FF0000";
  context.beginPath();
  context.moveTo(35, 25);
  context.lineTo(270, 25);
  context.lineTo(145, 150);
  context.fill();
}

function drawCommitialTriangle(context) {
  context.fillStyle = "#FFEF00";
  context.beginPath();
  context.moveTo(30, 30);
  context.lineTo(300, 75);
  context.lineTo(30, 120);
  context.fill();
}

function drawPositiveTriangle(context) {
  context.fillStyle = "#C0FF3E";
  context.beginPath();
  context.moveTo(35, 120);
  context.lineTo(145, 0);
  context.lineTo(255, 120);
  context.fill();
}

function showAnswer(answer) {
  answerHandler.textContent = "Answer:      " + answer;
}

export { showTriangle };
