import { IPartecipante } from "./IPartecipante";
import { ICorso } from './ICorso';
import { IAzienda } from './IAzienda';

class Partecipante implements IPartecipante {
    nome: string;
    cognome: string;
    paese_di_origine: string;
    livello_di_istruzione: string;
    competenze_linguistiche: string;
    ambito_di_formazione: string;

    constructor(nome: string, cognome: string, paese_di_origine: string, livello_di_istruzione: string, competenze_linguistiche: string, ambito_di_formazione: string) {
        this.nome = nome;
        this.cognome = cognome;
        this.paese_di_origine = paese_di_origine;
        this.livello_di_istruzione = livello_di_istruzione;
        this.competenze_linguistiche = competenze_linguistiche;
        this.ambito_di_formazione = ambito_di_formazione;
    }

    iscriviti_corso(corso: ICorso): void {
        corso.aggiungi_partecipante(this);
    }
}

class Corso implements ICorso {
    titolo_corso: string;
    descrizione: string;
    settore_professionale: string;
    durata: string;
    elenco_iscritti: IPartecipante[];

    constructor(titolo_corso: string, descrizione: string, settore_professionale: string, durata: string) {
        this.titolo_corso = titolo_corso;
        this.descrizione = descrizione;
        this.settore_professionale = settore_professionale;
        this.durata = durata;
        this.elenco_iscritti = [];
    }

    aggiungi_partecipante(partecipante: IPartecipante): void {
        this.elenco_iscritti.push(partecipante);
    }
}

class Azienda implements IAzienda {
    nome_azienda: string;
    settore_attività: string;
    descrizione: string;
    posizioni_aperte: string[];

    constructor(nome_azienda: string, settore_attività: string, descrizione: string, posizioni_aperte: string[]) {
        this.nome_azienda = nome_azienda;
        this.settore_attività = settore_attività;
        this.descrizione = descrizione;
        this.posizioni_aperte = posizioni_aperte;
    }

    offri_posizione(partecipante: IPartecipante, posizione: string): void {
        console.log(`Offerta posizione: ${posizione} a ${partecipante.nome} ${partecipante.cognome}`);
    }
}

let Partecipante1 = new Partecipante("Ajeje", "Brazorf", "Serbia", "Scuola primaria", "C1", "Metalmeccanica");
let Partecipante2 = new Partecipante("Petit", "Londo", "Senegal", "Scuola dell'infanzia", "C2", "Metalmeccanica");
let Partecipante3 = new Partecipante("Hakan", "Gomussoglu", "Turchia", "Scuola secondaria di primo grado", "B2", "Industria");
let Corso1 = new Corso("Metalmeccanica Base", "Corso dedicato all'apprendimento dell'uso di macchinari per poter lavorare in una catena di montaggio", "Metalmeccanica", "6 mesi");
let Corso2 = new Corso("Industria1", "Corso di apprendimento delle leggi basi per poter inserire il candidato in un ufficio", "Industria", "1 anno");
let Azienda1 = new Azienda("GTO", "Metalmeccanica", "Azienda che da più di 50 anni distribuisce semiassi in tutta europa.", ["Operaio", "Magazziniere"]);
let Azienda2 = new Azienda("Uffici Generali", "Industria", "Azienda che opera nel settore delle telecomunicazioni internazionali.", ["Impiegato"]);
console.log(Partecipante1, Partecipante2, Partecipante3);
console.log(Azienda1, Azienda2);

Partecipante1.iscriviti_corso(Corso1);
Partecipante2.iscriviti_corso(Corso1);
Partecipante3.iscriviti_corso(Corso2);
Azienda1.offri_posizione(Partecipante1, "Operaio");
Azienda1.offri_posizione(Partecipante2, "Magazziniere");
Azienda2.offri_posizione(Partecipante3, "Impiegato");

console.log(Corso1, Corso2);