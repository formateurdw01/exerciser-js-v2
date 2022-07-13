const Exo = require("./application/exo");

let essai = new Exo();

essai.importFichierJSON('./tests/test.json');
console.log(essai);
