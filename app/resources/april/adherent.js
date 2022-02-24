const adherent = () => {
  return function (req, res, next) {
    res.set("Content-Type","application/json; charset=UTF-8");

    const response = {
   "clients":[
      {
         "codeMarque":"string",
         "referenceAdherent":"1234567890111",
         "numeroPersonne":"0987654321000",
         "numeroPersonneBeneficiaire":"1234509876777",
         "rolePersonne":"string",
         "civilitePersonne":"string",
         "nomPersonne":"GUYENAPRIL",
         "prenomPersonne":"CHARLES PHUC-ANH APRIL",
         "dateNaissance":"1973-02-16",
         "codePostal":"92340",
         "marche":"string",
         "gammemarche":"string",
         "libellegammemarche":"string",
         "etape":"string",
         "estBloqueIntrapril":"string",
         "statutClient":"string",
         "referenceCourtier":"string",
         "numeroSecuriteSociale":"string",
         "coordonnees":{
            "adressePostale":{
               "adresse1":"6 Rue DE FONTAINE GRELOT",
               "adresse2":"string",
               "adresse3":"string",
               "adresse4":"string",
               "codePostal":"92340",
               "ville":"BOURG LA REINE",
               "pays":"France",
               "estAdressePartagee":true
            },
            "telephones":[
               {
                  "telephone":"+33778196309",
                  "type":"mobile"
               }
            ],
            "emails":[
               {
                  "email":"test_april@yopmail.com",
                  "type":"string",
                  "estRejete":false
               }
            ]
         },
         "ayantsdroit":[
            {
               "codeMarque":"string",
               "referenceAdherent":"string",
               "numeroPersonne":"string",
               "numeroPersonneBeneficiaire":"string",
               "rolePersonne":"string",
               "civilitePersonne":"string",
               "nomPersonne":"string",
               "prenomPersonne":"string",
               "dateNaissance":"2022-01-25",
               "codePostal":"string",
               "marche":"string",
               "gammemarche":"string",
               "libellegammemarche":"string",
               "etape":"string",
               "estBloqueIntrapril":"string",
               "statutClient":"string",
               "referenceCourtier":"string",
               "numeroSecuriteSociale":"string"
            }
         ]
      }
   ]
   };
    
    return res.status(200).send(response)
  }
}

module.exports = adherent