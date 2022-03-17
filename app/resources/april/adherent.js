const adherent = () => {
  return function (req, res, next) {
    res.set("Content-Type","application/json; charset=UTF-8");

    const response = {

    "clients": [

        {

            "codeMarque": "APRIL",

            "referenceAdherent": "330093900",

            "numeroPersonne": "0011805220",

            "numeroPersonneBeneficiaire": "0011805220",

            "rolePersonne": "CLI",

            "civilitePersonne": "Mr",

            "nomPersonne": "LEHAIRE",

            "prenomPersonne": "Philippe",

            "dateNaissance": "1964-02-21",

            "codePostal": "49660",

            "marche": "SAN",

            "gammemarche": "SANSAN",

            "libellegammemarche": "SAN Santé",

            "etape": "APV",

            "estBloqueIntrapril": "N",

            "statutClient": "Adhérent Particulier",

            "referenceCourtier": "51366",

            "numeroSecuriteSociale": "1640275112362",

            "coordonnees": {

                "adressePostale": {

                    "adresse1": "",

                    "adresse2": "",

                    "adresse3": "LD LA PAPINIERE",

                    "adresse4": "",

                    "codePostal": "49660",

                    "ville": "TORFOU",

                    "pays": "FRANCE",

                    "estAdressePartagee": false

                },

                "telephones": [

                    {

                        "telephone": "0999999999",

                        "type": "TLDOM"

                    },

                    {

                        "telephone": "0799999999",

                        "type": "TLPOR"

                    }

                ],

                "emails": [

                    {

                        "email": "AprilT.EtudesTESTSSM@april.fr",

                        "type": "MLPRI",

                        "estRejete": false

                    },

                    {

                        "email": "AprilT.EtudesTESTSSM@april.fr",

                        "type": "MLSEC",

                        "estRejete": false

                    }

                ]

            },

            "ayantsdroit": [

                {

                    "codeMarque": "APRIL",

                    "referenceAdherent": "330093900",

                    "numeroPersonne": "0011805220",

                    "numeroPersonneBeneficiaire": "0011873473",

                    "rolePersonne": "CLI",

                    "civilitePersonne": "Mle",

                    "nomPersonne": "LEHAIRE",

                    "prenomPersonne": "Audrey",

                    "dateNaissance": "1994-04-13",

                    "codePostal": "",

                    "marche": "SAN",

                    "gammemarche": "SANSAN",

                    "libellegammemarche": "SAN Santé",

                    "etape": "APV",

                    "estBloqueIntrapril": "N",

                    "statutClient": "Assuré",

                    "referenceCourtier": "51366",

                    "numeroSecuriteSociale": "2670745234160"

                },

                {

                    "codeMarque": "APRIL",

                    "referenceAdherent": "330093900",

                    "numeroPersonne": "0011805220",

                    "numeroPersonneBeneficiaire": "0011873477",

                    "rolePersonne": "CLI",

                    "civilitePersonne": "Mle",

                    "nomPersonne": "LEHAIRE",

                    "prenomPersonne": "Emilie",

                    "dateNaissance": "1998-11-26",

                    "codePostal": "",

                    "marche": "SAN",

                    "gammemarche": "SANSAN",

                    "libellegammemarche": "SAN Santé",

                    "etape": "APV",

                    "estBloqueIntrapril": "N",

                    "statutClient": "Assuré",

                    "referenceCourtier": "51366",

                    "numeroSecuriteSociale": "1640275112362"

                },

                {

                    "codeMarque": "APRIL",

                    "referenceAdherent": "330093900",

                    "numeroPersonne": "0011805220",

                    "numeroPersonneBeneficiaire": "0011873479",

                    "rolePersonne": "CLI",

                    "civilitePersonne": "Mle",

                    "nomPersonne": "LEHAIRE",

                    "prenomPersonne": "Charlotte",

                    "dateNaissance": "2001-09-10",

                    "codePostal": "",

                    "marche": "SAN",

                    "gammemarche": "SANSAN",

                    "libellegammemarche": "SAN Santé",

                    "etape": "APV",

                    "estBloqueIntrapril": "N",

                    "statutClient": "Assuré",

                    "referenceCourtier": "51366",

                    "numeroSecuriteSociale": "1640275112362"

                }

            ]

        }

    ]

};
    
    return res.status(200).send(response)
  }
}

module.exports = adherent