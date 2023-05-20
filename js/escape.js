function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("input-text");

  function setFocusToEnd() {
    const valueLength = inputText.value.length;
    const lastCharacter = inputText.value.slice(-1);
    if (lastCharacter === "█") {
      inputText.setSelectionRange(valueLength - 1, valueLength - 1);
    } else {
      inputText.setSelectionRange(valueLength, valueLength);
    }
  }

  setFocusToEnd(); // Set initial focus on page load

  inputText.addEventListener("focus", setFocusToEnd);
  inputText.addEventListener("click", setFocusToEnd);
  inputText.addEventListener("input", setFocusToEnd);

  document.body.addEventListener("click", setFocusToEnd);

  inputText.addEventListener("keydown", function (event) {
    const arrowKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
    if (arrowKeys.includes(event.key)) {
      event.preventDefault();
    }
  });

  function updateInputWidth() {
    const textLength = inputText.value.length;
    const textWidth = textLength * 12; // Adjust the multiplier as needed

    inputText.style.width = textWidth + "px";
  }

  inputText.addEventListener("input", updateInputWidth);
});

const inputText = document.getElementById("input-text");
inputText.addEventListener("input", function () {
  let value = this.value;
  value = value.replace(/█/g, "");
  this.value = value + "█";
});

setInterval(function () {
  const inputText = document.getElementById("input-text");
  const lastCharacter = inputText.value.slice(-1);

  if (lastCharacter === "█") {
    inputText.value = inputText.value.slice(0, -1);
  } else {
    inputText.value += "█";
  }
}, 800);

const output = document.getElementById("output");
console.log(output);
const htmlContent = [
  {
    html: `<h1>Welcome</h1>
    <p>This is a <strong>typewriter effect</strong> example.</p>
    <p>It supports HTML markup, line breaks, and various formatting.</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <p>Feel free to modify and experiment! </p>`,
    animation: "typewriter",
  },
  {
    html: `<div class="photo-animation" style="background: url('asset/411-200x300.jpg') no-repeat;"></div>`,
    animation: "none",
  },
];

async function type(html) {
  let currentHTML = output.innerHTML;
  for (let charIndex = 0; charIndex < html.length; charIndex++) {
    const currentChar = html.charAt(charIndex);
    currentHTML += currentChar;
    output.innerHTML = currentHTML;
    await timeout(25);
  }
}

(async function () {
  for (const content of htmlContent) {
    if (content.animation === "typewriter") {
      await type(content.html);
    }
    if (content.animation === "none") {
      output.innerHTML += content.html;
    }
  }
})();
