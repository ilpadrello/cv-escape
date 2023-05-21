export default [
  {
    html: "<p>> run emaraude-escape-cv.exe</p>",
    animation: "type-load",
  },
  {
    clear: true,
    html: `<div style="text-align:center;">
          <pre style="color:#f75454; font-size: 1rem">
      
              ▓█████  ███▄ ▄███▓▓█████  ██▀███   ▄▄▄       █    ██ ▓█████▄ ▓█████ 
              ▓█   ▀ ▓██▒▀█▀ ██▒▓█   ▀ ▓██ ▒ ██▒▒████▄     ██  ▓██▒▒██▀ ██▌▓█   ▀ 
              ▒███   ▓██    ▓██░▒███   ▓██ ░▄█ ▒▒██  ▀█▄  ▓██  ▒██░░██   █▌▒███   
              ▒▓█  ▄ ▒██    ▒██ ▒▓█  ▄ ▒██▀▀█▄  ░██▄▄▄▄██ ▓▓█  ░██░░▓█▄   ▌▒▓█  ▄ 
              ░▒████▒▒██▒   ░██▒░▒████▒░██▓ ▒██▒ ▓█   ▓██▒▒▒█████▓ ░▒████▓ ░▒████▒
              ░░ ▒░ ░░ ▒░   ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░ ▒▒   ▓▒█░░▒▓▒ ▒ ▒  ▒▒▓  ▒ ░░ ▒░ ░
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
    <p>What is happening? Who are you?</p>
    <p>Oh, I remeber now...
    <p>I have transfered my brain in this computer</p>
    <p>Are you here to know more about me ?</p>
    <p>of course you are! </p>
    <p>Who doesn't want to know about the only person capable of transfer his conciousness into a machine?</p>
    <br>
    <br>
    <p>Press Enter To Coninue...</p>
       `,
    loadAnimationAfter: 3,
    correctAnwsers: [""],
  },
  {
    clear: true,
    html: `
    <p>Im sorry but it seems that my code is stuck!</p>
    <p>My programmer was smart and used captcha to prevent me to access memory!</p>
    </br>
    <p>I will need your help with to solve some captchas!</p>
    </br>
    <p>Also a copy of my latest resume is necessary to continue, do you have one with you?</p>
    <p>I would print you a copy, but my printer is out of ink! Tell me when you're ready</p>
    </br>
    <p>Ready?(y/yes)</p>
       `,
    animation: "typewriter",
    correctAnwsers: ["y", "yes", "oui", "o"],
    wrongAnswerAction: "<p>Sorry I cound't understand...</p>",
  },
];
