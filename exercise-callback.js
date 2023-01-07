const fs = require("fs");

const fileName = "fileditesto.txt";
const fileContent = "Testo di prova.";

fs.writeFile(fileName, fileContent, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Il file ${fileName} è stato salvato.`);
});
