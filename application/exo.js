class Exo {
  constructor( description ) {
    Object.assign(this, {
      id: 0,
      titre: "Exercice",
      arguments: {},
      enonce: "Enoncé",
      avant: "",
      solution: "",
      apres: "",
      retour: "",
    })

    Object.assign(this,description);
    console.log( this );
  }
}
module.exports = Exo;
