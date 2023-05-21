export default [
  {
    clear: true,
    html: `
    <p>At the age of 15, I discovered this software that allowed you to create games, animations, and more.</p>
    <p>People used to create banners with it, but that was not enough for me... I wanted more.</p>
    <p>I learned HTML and CSS, and I was able to create entire websites with this software called...</p>
    <br>
    `,
    loadAnimationAfter: 2,
  },
  {
    html: `
    <p>Why can't I remeber the name of this software ? Oh no...</p>
    </br>
    <p>It is another captcha...</p>
    </br>
    <p>What is the software at coordinates x:2 y:17</p>
    `,
    correctAnwsers: ["flash", "fl", "adobe flash", "marcromedia flash"],
    hint: [
      "<p>Is a former software of Macromedia bought by Adobe</p>",
      "<p>It was killed by Apple, because was not supported on Iphones</p>",
      "<p>The rulers in the resume defines coordinates x(horziontal) and y (vertical)</p>",
      "<p>flash</p>",
    ],
  },
];
