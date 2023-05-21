export default [
  {
    clear: true,
    html: `
    <p>À l'âge de 15 ans, j'ai découvert ce logiciel qui permettait de créer des jeux, des animations et bien plus encore.</p>
    <p>Les gens l'utilisaient pour créer des bannières, mais cela ne me suffisait pas... Je voulais plus.</p>
    <p>J'ai appris HTML et CSS, et j'ai pu créer des sites web entiers avec ce logiciel appelé...</p>
    <br>
    `,
    loadAnimationAfter: 2,
  },
  {
    html: `
    <p>Pourquoi est-ce que je n'arrive pas à me souvenir du nom de ce logiciel ? Oh non...</p>
    </br>
    <p>C'est un autre captcha...</p>
    </br>
    <p>Quel est le logiciel aux coordonnées:</p> 
    <p>x = 2</p> 
    <p>y = 17</p>
    `,
    correctAnwsers: ["flash", "fl", "adobe flash", "marcromedia flash"],
    hint: [
      "<p>C'est un ancien logiciel de Macromedia racheté par Adobe</p>",
      "<p>Il a été tué par Apple, car il n'était pas pris en charge sur les iPhone</p>",
      "<p>Les règles dans le CV définissent les coordonnées x (horizontales) et y (verticales)</p>",
      "<p>flash</p>",
    ],
  },
];
