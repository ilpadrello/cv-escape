export default [
  {
    clear: true,
    html: `
    <pre>
Kernel Version 2.3.15
Loading operating system 
Starting neural network
</pre>
        `,
    animation: "typewriter",
  },
  {
    html: `
    <pre>

> To run the software in english type run-en.exe 
> Pour lancer le logiciel en français run-fr.exe
</pre>`,
    correctAnwsers: ["run-en.exe", "run-fr.exe"],
    animation: "typewriter",
    chooseLanguage: true,
  },
];
