const eligibility = () => {
  return function (req, res, next) {
    res.set("Content-Type","application/json; charset=UTF-8");

   const response = {

		"statut":"OK",

		"partenaire":"APRIL",

		"entite":"APRIL Santé MIX",

		"erreur":false

	};
    
    return res.status(200).send(response)
  }
}

module.exports = eligibility

