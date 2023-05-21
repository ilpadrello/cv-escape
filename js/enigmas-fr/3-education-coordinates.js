export default [
  {
    clear: true,
    html: `
    <p>...Je m'appelais Simone PANEBIANCO, je suis né en Italie, et depuis que j'étais petit garçon, j'ai toujours voulu créer des choses
    </p>
    <p>À l'âge de 10 ans, j'ai commencé à faire des films avec Microsoft 3DMM</p>
    <p>Mais ce n'est qu'à l'âge de 15 ans que j'ai découvert le plaisir de la programmation</p>
    <p>J'ai 🔒██████ █ ████ █ ███ puis j'ai 🔒█ ████ ███ ██ █████ ███ ████ ██...</p>
    <br>
    <br>
    `,
    loadAnimationAfter: 2,
  },
  {
    html: `
    <p>J'ai trouvé le premier captcha : Pouvez-vous répondre à cette question pour moi ? Mon CV pourrait vous aider</p>
    </br>
    <p>Quelles sont les coordonnées (x et y) de ce symbole?</p>
    </br>
    <div style="text-align: center;">
    <img src="./asset/education-2.png" alt="">
    </div>
    `,
    correctAnwsers: ["11-17", "1117", "17-11", "1711", "11 17", "17 11"],
    hint: [
      "<p>Cherchez l'icône dans le CV, vous pouvez plier le papier pour vous aider à trouver les coordonnées... </p>",
      "<p>Les règles définissent les coordonnées x pour l'horizontale et y pour la verticale</p>",
      "<p>11-17</p>",
    ],
    loadAnimationBefore: 5,
  },
];
