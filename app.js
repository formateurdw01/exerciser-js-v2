const Exo = require("./application/exo");

let essai = new Exo();

essai.importFichierJSON('./tests/test.json');
console.log(essai);
essai.exportFichierJSON('./tests/test-export.json');

