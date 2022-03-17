const eligibility = () => {
  return function (req, res, next) {
    res.set("Content-Type","application/json; charset=UTF-8");

   const response = {

  "statutdemande": "OK",

  "msgstatut": "",

  "partenaire": "APRIL",

  "produitcomm": "ASPSAN0110",

  "libprodcomm": "APRIL Santé MIX",

  "codeproduit": "MIX0150",

  "nom": "LEPAINTEUR",

  "prenom": "Louis",

  "dateNaissance": "1945-04-24"

};
    
    return res.status(200).send(response)
  }
}

module.exports = eligibility

