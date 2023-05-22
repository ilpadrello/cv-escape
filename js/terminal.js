function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let background;
let startFloppy;

window.addEventListener("DOMContentLoaded", async function () {
  const inputText = document.getElementById("input-text");
  background = new Audio("./asset/audio/Screen Flikering.mp3");
  startFloppy = new Audio("./asset/audio/FloppyDisk15.mp3");
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

  let audioOneTime = true;
  document.body.addEventListener("click", setFocusToEnd);
  document.body.addEventListener("click", async () => {
    if (audioOneTime) {
      if (typeof background.loop == "boolean") {
        background.loop = true;
      } else {
        background.addEventListener(
          "ended",
          function () {
            this.currentTime = 0;
            this.play();
          },
          false
        );
      }
      background.volume = 0.5;
      try {
        await startFloppy.play();
        await background.play();
      } catch (error) {
        console.log(error);
      }

      audioOneTime = false;
    }
  });

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
