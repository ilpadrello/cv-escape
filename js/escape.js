import escapeListEn from "./enigmas-en/index.js";

const escapeListFr = escapeListEn;
let escapeList = escapeListEn;
const output = document.getElementById("output");
const inputText = document.getElementById("input-text");

let escapeIndex = 0;
let hintIndex = 0;

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
  await emulateLoad();

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
        } else {
          escapeList = escapeListFr;
        }
      }
      hintIndex = 0;
      escapeIndex++;
      await next();
    } else {
      if (answer === "hint" && content.hint) {
        await emulateLoad(2);
        await type(content.hint[hintIndex]);
        if (hintIndex < content.hint.length - 1) {
          hintIndex++;
        }
      } else {
        if (content.wrongAnswerAction) {
          await type(content.wrongAnswerAction);
        } else {
          await type("<p>Wrong</p>");
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
    await timeout(50);
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
      //   let currentHtml = output.innerHTML;
      //   let input = inputText.value;
      //   const lastCharacter = input.slice(-1);
      //   if (lastCharacter === "█") {
      //     input = input.slice(0, -1);
      //   }
      //   currentHtml += `<p>${input}</p>`;
      //   output.innerHTML = currentHtml;
      //   inputText.value = "";

      scrollOutputToBottom(output);
    }
  });
});

(async () => {
  await next();
})();
