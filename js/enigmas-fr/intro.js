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
  },
  {
    html: `
      <p>Que'est ce qu'il se passe? </p>
      <p>Oh, I remeber now...
      <p>I have transfered my brain in this computer</p>
      <p>Are you here to know more about me ?</p>
      <p>of course you are...</p>
      <p>Type start to begin the adventure</p>
       `,
    animation: "typewriter",
    correctAnwsers: ["start"],
    wrongrAnswerAction: "<p>Sorry I cound't understand...</p>",
  },
];
