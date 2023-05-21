export default [
  {
    clear: true,
    html: `<p>I've fond a captcha: Can you answer this question for me ? My resume could be of help</p>
        <p></p>
        <p>What are the coordinates of this simbol(x-y)? </p>
        <img src="./asset/education.png" alt="">`,
    correctAnwsers: ["11-17", "1117", "17-11", "1711"],
    hint: [
      "<p>Search the icon in the resume, you can fold the paper to help you find the coordinates...hint</p>",
      "<p>The rulers defines coordinates x horziontal and y for vertical</p>",
      "<p>11-17</p>",
    ],
    loadAnimationBefore: 5,
  },
];
