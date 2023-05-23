export default [
  {
    clear: true,
    html: `
    <pre>
Kernel Version 2.3.15
Loading operating system 
Starting neural network

***********************************************************
***  For a better experience use a desktop computer     ***
***             This expirience has audio               ***
***         You are allowed to use internet             ***
***********************************************************

To start The Audio Click Anywhere in the page

Command List:
  hint: get a suggestion
  mute: mute sound
unmute: unmute sound

</pre>
        `,
    animation: "typewriter",
  },
  {
    html: `
    <pre>

> To run the software in english type: run-en.exe 
> Pour le logiciel en français tapez : run-fr.exe
</pre>`,
    correctAnwsers: ["run-en.exe", "run-fr.exe"],
    animation: "typewriter",
    chooseLanguage: true,
  },
];
