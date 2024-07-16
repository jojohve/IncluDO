"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Partecipante = /** @class */ (function () {
    function Partecipante(nome, cognome, paese_di_origine, livello_di_istruzione, competenze_linguistiche, ambito_di_formazione) {
        this.nome = nome;
        this.cognome = cognome;
        this.paese_di_origine = paese_di_origine;
        this.livello_di_istruzione = livello_di_istruzione;
        this.competenze_linguistiche = competenze_linguistiche;
        this.ambito_di_formazione = ambito_di_formazione;
    }
    Partecipante.prototype.iscriviti_corso = function (corso) {
        corso.aggiungi_partecipante(this);
    };
    return Partecipante;
}());
var Corso = /** @class */ (function () {
    function Corso(titolo_corso, descrizione, settore_professionale, durata) {
        this.titolo_corso = titolo_corso;
        this.descrizione = descrizione;
        this.settore_professionale = settore_professionale;
        this.durata = durata;
        this.elenco_iscritti = [];
    }
    Corso.prototype.aggiungi_partecipante = function (partecipante) {
        this.elenco_iscritti.push(partecipante);
    };
    return Corso;
}());
var Azienda = /** @class */ (function () {
    function Azienda(nome_azienda, settore_attività, descrizione, posizioni_aperte) {
        this.nome_azienda = nome_azienda;
        this.settore_attività = settore_attività;
        this.descrizione = descrizione;
        this.posizioni_aperte = posizioni_aperte;
    }
    Azienda.prototype.offri_posizione = function (partecipante, posizione) {
        console.log("Offerta posizione: ".concat(posizione, " a ").concat(partecipante.nome, " ").concat(partecipante.cognome));
    };
    return Azienda;
}());
var Partecipante1 = new Partecipante("Ajeje", "Brazorf", "Serbia", "Scuola primaria", "C1", "Metalmeccanica");
var Partecipante2 = new Partecipante("Petit", "Londo", "Senegal", "Scuola dell'infanzia", "C2", "Metalmeccanica");
var Partecipante3 = new Partecipante("Hakan", "Gomussoglu", "Turchia", "Scuola secondaria di primo grado", "B2", "Industria");
var Corso1 = new Corso("Metalmeccanica Base", "Corso dedicato all'apprendimento dell'uso di macchinari per poter lavorare in una catena di montaggio", "Metalmeccanica", "6 mesi");
var Corso2 = new Corso("Industria1", "Corso di apprendimento delle leggi basi per poter inserire il candidato in un ufficio", "Industria", "1 anno");
var Azienda1 = new Azienda("GTO", "Metalmeccanica", "Azienda che da più di 50 anni distribuisce semiassi in tutta europa.", ["Operaio", "Magazziniere"]);
var Azienda2 = new Azienda("Uffici Generali", "Industria", "Azienda che opera nel settore delle telecomunicazioni internazionali.", ["Impiegato"]);
console.log(Partecipante1, Partecipante2, Partecipante3);
console.log(Azienda1, Azienda2);
Partecipante1.iscriviti_corso(Corso1);
Partecipante2.iscriviti_corso(Corso1);
Partecipante3.iscriviti_corso(Corso2);
Azienda1.offri_posizione(Partecipante1, "Operaio");
Azienda1.offri_posizione(Partecipante2, "Magazziniere");
Azienda2.offri_posizione(Partecipante3, "Impiegato");
console.log(Corso1, Corso2);
