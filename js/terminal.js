function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

window.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("input-text");

  function setFocusToEnd() {
    inputText.focus();
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

  function updateInputWidth() {
    const textLength = inputText.value.length;
    const textWidth = textLength * 12; // Adjust the multiplier as needed

    inputText.style.width = textWidth + "px";
  }

  inputText.addEventListener("input", updateInputWidth);

  var output = document.getElementById("output");

  // Function to scroll the div to the bottom
  function scrollOutputToBottom() {
    output.scrollTop = output.scrollHeight;
  }

  let terminalHeight = output.scrollHeight;
  //On resize Terminal
  this.setInterval(() => {
    //console.log(terminalHeight, output.scrollHeight);
    if (terminalHeight < output.scrollHeight) {
      scrollOutputToBottom();
      terminalHeight = output.scrollHeight;
    }
  }, 50);
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
