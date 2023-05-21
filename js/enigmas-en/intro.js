export default [
  {
    html: "<p>> run emaraude-escape-cv.exe</p>",
    animation: "type-load",
  },
  {
    clear: true,
    html: `<div>
          <pre style="color:#f75454">
      
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
      </div>`,
    animation: "header",
    loadAnimationAfter: 6,
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
    <p>A copy of my latest resume is mandatory to continue, do you have one with you?</p>
    <p>I would print you a copy, but my printer is out of ink</p>
    <p>Are you ready? (y/yes)</p>
       `,
    animation: "typewriter",
    correctAnwsers: ["y", "yes", "oui", "o"],
    wrongAnswerAction: "<p>Sorry I cound't understand...</p>",
    loadAnimationAfter: true,
  },
  {
    html: `
    <p>My name was Simone PANEBIANCO, I was born in Italy, and since I was a little boy I dreamed about creating stuff
    </p>
    <p>At the age of 10 I've started making movies using Microsoft 3DMM</p>
    <p>But It was only at the age of 15 that I'have discovered the coding pleasure</p>
    <p>🔒██████ █ ████ █ ███</p>
    <p>🔒█ ████ ███ ██ █████ ███ ████ ██</p>
    <p>Im sorry it seems that my code is stuck! It looks like someone is trying to block me!</p>
    <p>Im launching my unstuck program! But I will need your help with captchas!</p>
    <p>Ready?(y/yes)</p>
    `,
    correctAnwsers: ["y", "yes", "oui", "o"],
    wrongAnswerAction: "<p>Sorry I cound't understand...</p>",
    clear: true,
  },
];
