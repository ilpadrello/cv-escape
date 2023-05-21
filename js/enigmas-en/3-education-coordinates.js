export default [
  {
    clear: true,
    html: `
    <p>...My name was Simone PANEBIANCO, I was born in Italy, and since I was a little boy I dreamed about creating stuff
    </p>
    <p>At the age of 10 I've started making movies using Microsoft 3DMM</p>
    <p>But It was only at the age of 15 that I'have discovered the coding pleasure</p>
    <p> I have 🔒██████ █ ████ █ ███ and then I have 🔒█ ████ ███ ██ █████ ███ ████ ██...</p>
    <br>
    <br>
    `,
    loadAnimationAfter: 2,
  },
  {
    html: `<p>I've fond the first captcha: Can you answer this question for me ? My resume could be of help</p>
        <p></p>
        <p>What are the coordinates (x and y) of this simbol? </p>
        </br>
        <div style="text-align: center;">
        <img src="./asset/education-2.png" alt="">
        </div>
        `,
    correctAnwsers: ["11-17", "1117", "17-11", "1711"],
    hint: [
      "<p>Search the icon in the resume, you can fold the paper to help you find the coordinates...</p>",
      "<p>The rulers defines coordinates x horziontal and y for vertical</p>",
      "<p>11-17</p>",
    ],
    loadAnimationBefore: 5,
  },
];
