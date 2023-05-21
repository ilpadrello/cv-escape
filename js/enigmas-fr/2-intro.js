export default [
  {
    html: "<p>> run emaraude-escape-cv.exe</p>",
    animation: "type-load",
  },
  {
    clear: true,
    html: `<div style="text-align:center;">
          <pre style="color:#f75454; font-size:1rem;" >
      
              ▓█████  ███▄ ▄███▓▓█████  ██▀███   ▄▄▄       █    ██ ▓█████▄ ▓█████ 
              ▓█   ▀ ▓██▒▀█▀ ██▒▓█   ▀ ▓██ ▒ ██▒▒████▄     ██  ▓██▒▒██▀ ██▌▓█   ▀ 
              ▒███   ▓██    ▓██░▒███   ▓██ ░▄█ ▒▒██  ▀█▄  ▓██  ▒██░░██   █▌▒███   
              ▒▓█  ▄ ▒██    ▒██ ▒▓█  ▄ ▒██▀▀█▄  ░██▄▄▄▄██ ▓▓█  ░██░░▓█▄   ▌▒▓█  ▄ 
              ░▒████▒▒██▒   ░██▒░▒████▒░██▓ ▒██▒ ▓█   ▓██▒▒▒█████▓ ░▒████▓ ░▒████▒
              ░░ ▒░ ░░ ▒░   ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░ ▒▒   ▓▒█░░▒▓▒ ▒ ▒  ▒▒▓run  ▒ ░░ ▒░ ░
               ░ ░  ░░  ░      ░ ░ ░  ░  ░▒ ░ ▒░  ▒   ▒▒ ░░░▒░ ░ ░  ░ ▒  ▒  ░ ░  ░
                 ░   ░      ░      ░     ░░   ░   ░   ▒    ░░░ ░ ░  ░ ░  ░    ░   
                 ░  ░       ░      ░  ░   ░           ░  ░   ░        ░       ░  ░
                                                                    ░             
      
              ▓█████   ██████  ▄████▄   ▄▄▄       ██▓███  ▓█████     ▄████▄ ██▒   █▓
              ▓█   ▀ ▒██    ▒ ▒██▀ ▀█  ▒████▄    ▓██░  ██▒▓█   ▀    ▒██▀ ▀█▓██░   █▒
              ▒███   ░ ▓██▄   ▒▓█    ▄ ▒██  ▀█▄  ▓██░ ██▓▒▒███      ▒▓█    ▄▓██  █▒░
              ▒▓█  ▄   ▒   ██▒▒▓▓▄ ▄██▒░██▄▄▄▄██ ▒██▄█▓▒ ▒▒▓█  ▄    ▒▓▓▄ ▄██▒▒██ █░░
              ░▒████▒▒██████▒▒▒ ▓███▀ ░ ▓█   ▓██▒▒██▒ ░  ░░▒████▒   ▒ ▓███▀ ░ ▒▀█░  
              ░░ ▒░ ░▒ ▒▓▒ ▒ ░░ ░▒ ▒  ░ ▒▒   ▓▒█░▒▓▒░ ░  ░░░ ▒░ ░   ░ ░▒ ▒  ░ ░ ▐░  
              ░ ░  ░░ ░▒  ░ ░  ░  ▒     ▒   ▒▒ ░░▒ ░      ░ ░  ░     ░  ▒    ░ ░░  
              ░   ░  ░  ░  ░          ░   ▒   ░░          ░      ░           ░░  
              ░  ░      ░  ░ ░            ░  ░            ░  ░   ░ ░          ░  
                              ░                                     ░           ░   
      
      </pre>
      </div>
      <p>Press Enter To Continue...</p>
      `,
    animation: "header",
    correctAnwsers: [""],
    loadAnimationAfter: 6,
    hint: ["<p>Press Enter To Continue...</p>"],
  },
  {
    clear: true,
    html: `
    <p>Que se passe-t-il ? Qui êtes-vous ?</p>
    <p>Ah, je me souviens maintenant...</p>
    <p>J'ai transféré mon cerveau dans cet ordinateur.</p>
    <p>Êtes-vous ici pour en savoir plus sur moi ?</p>
    <p>Évidemment que oui !</p>
    <p>Qui ne voudrait pas en savoir plus sur la seule personne capable de transférer sa conscience dans une machine ?</p>
    <br>
    <br>
    <p>Appuyez sur Entrée pour continuer...</p>
       `,
    loadAnimationAfter: 3,
    correctAnwsers: [""],
  },
  {
    clear: true,
    html: `
    <p>Désolé, mais il semble que mon code soit bloqué !</p>
    <p>Mon programmeur a été malin et a utilisé des captchas pour m'empêcher d'accéder à la mémoire !</p>
    </br>
    <p>J'aurai besoin de votre aide pour résoudre quelques captchas !</p>
    </br>
    <p>Une copie de mon dernier CV est nécessaire pour continuer, l'avez-vous avec vous ?</p>
    <p>Je vous en imprimerai une copie, mais mon imprimante est à court d'encre ! Dites-moi quand vous êtes prêt.</p>
    </br>
    <p>Prêt ? (o/oui)</p>
       `,
    animation: "typewriter",
    correctAnwsers: ["y", "yes", "oui", "o"],
    wrongAnswerAction: "<p>Désolé, je n'ai pas compris...</p>",
  },
];
