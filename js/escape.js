import escapeListEn from "./enigmas-en/index.js";
import escapeListFr from "./enigmas-fr/index.js";

let escapeList = escapeListFr;
const output = document.getElementById("output");
const inputText = document.getElementById("input-text");

let escapeIndex = 0;
let hintIndex = 0;
let wrongAnswerText = "Access Denied";

async function next() {
  let content = null;
  let exit = false;
  if (escapeIndex >= escapeList.length) {
    console.log("Game ended");
    await emulateLoad();
    await type("game ended");
  } else {
    do {
      if (escapeIndex < escapeList.length) {
        content = escapeList[escapeIndex];
        //Clear if needed;
        if (content.clear) {
          await clear();
        }
        if (content.loadAnimationBefore) {
          await emulateLoad(content.loadAnimationBefore);
        }
        if (!content.animation || content.animation === "typewriter") {
          await type(content.html);
        }
        if (content.animation === "type-load") {
          await type(content.html, true);
          await emulateLoad();
        }
        if (content.animation === "none") {
          output.innerHTML += content.html;
        }
        if (content.animation === "header") {
          await typeLine(content.html);
        }
        if (content.loadAnimationAfter) {
          await emulateLoad(content.loadAnimationAfter);
        }
        if (!content.correctAnwsers) {
          escapeIndex++;
        } else {
          exit = true;
        }
      }
    } while (escapeIndex < escapeList.length && !exit);
  }

  console.log(escapeIndex, escapeList.length);
}

async function clear() {
  output.innerHTML = "";
}

function emptyInput() {
  inputText.value = "";
  inputText.focus();
}

async function answer() {
  const answer = removeBlock(inputText.value);
  emptyInput();
  let content = escapeList[escapeIndex];
  if (content?.correctAnwsers) {
    if (
      content.correctAnwsers
        .map((a) => a.toLowerCase())
        .includes(answer.toLowerCase())
    ) {
      if (content.chooseLanguage) {
        if (answer.toLowerCase().includes("en")) {
          escapeList = escapeListEn;
          document.getElementById("suggestion-aid").innerText =
            "* Type hint to have a suggestion.";
        } else {
          escapeList = escapeListFr;
          document.getElementById("suggestion-aid").innerText =
            '* Tapez "aide" pour avoir une suggestion.';
        }
      }
      hintIndex = 0;
      escapeIndex++;
      await emulateLoad(2);
      await next();
    } else {
      if ((answer === "hint" || answer === "aide") && content.hint) {
        await emulateLoad(2);
        await type(content.hint[hintIndex]);
        if (hintIndex < content.hint.length - 1) {
          hintIndex++;
        }
      } else {
        if (content.wrongAnswerAction) {
          await emulateLoad(2);
          await type(content.wrongAnswerAction);
        } else {
          await emulateLoad(2);
          await type(`<p>${wrongAnswerText}</p>`);
        }
      }
    }
  }
}

async function emulateLoad(rounds = 3) {
  let currentHTML = output.innerHTML;
  const loader = ["/", "-", "|", "/", "-", "|"];
  for (let j = 0; j < rounds; j++) {
    for (let i = 0; i < loader.length; i++) {
      currentHTML += loader[i];
      output.innerHTML = currentHTML;
      scrollOutputToBottom(output);
      await timeout(100);
      currentHTML = currentHTML.slice(0, -1);
      output.innerHTML = currentHTML;
    }
  }
}

function removeBlock(text) {
  const lastCharacter = text.slice(-1);
  if (lastCharacter === "█") {
    return text.slice(0, -1);
  }
  return text;
}

async function type(html) {
  let currentHTML = output.innerHTML;
  for (let charIndex = 0; charIndex < html.length; charIndex++) {
    const currentChar = html.charAt(charIndex);
    currentHTML += currentChar;
    output.innerHTML = currentHTML;
    scrollOutputToBottom(output);
    await timeout(15);
  }
}

async function typeLine(html) {
  let currentHTML = output.innerHTML;
  const lines = html.split("\n");
  for (const line of lines) {
    currentHTML += line + "\n";
    output.innerHTML = currentHTML;
    scrollOutputToBottom(output);
    await timeout(100);
  }
}

// Function to scroll the div to the bottom
function scrollOutputToBottom(output) {
  output.scrollTop = output.scrollHeight + 100;
}

window.addEventListener("DOMContentLoaded", async function () {
  const inputText = document.getElementById("input-text");
  var output = document.getElementById("output");
  inputText.addEventListener("keydown", async function (event) {
    const arrowKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
    if (arrowKeys.includes(event.key)) {
      event.preventDefault();
    }
    if (["Enter"].includes(event.key)) {
      await answer();
      scrollOutputToBottom(output);
    }
  });
});

(async () => {
  await next();
})();
