const fs = require('fs');
class Exo {
  constructor( description = {} ) {
    Object.assign(this, {
      id: 0,
      titre: "Exercice",
      consigne: "Consigne",
      arguments: {},
      avant: "",
      solution: "",
      apres: "",
    });

    Object.assign(this,description);
  }

  importFichierJSON(fichier) {
    Object.assign(this,JSON.parse(fs.readFileSync(fichier,'utf-8')));
  }
}
module.exports = Exo;
