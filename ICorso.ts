interface ICorso {
    titolo_corso: string;
    descrizione: string;
    settore_professionale: string;
    durata: string;
    elenco_iscritti: string;
    aggiungi_partecipante(): void;
}

export class Corso implements ICorso {
    titolo_corso: string;
    descrizione: string;
    settore_professionale: string;
    durata: string;
    elenco_iscritti: string;

    constructor(titolo_corso: string, descrizione: string, settore_professionale: string, durata: string, elenco_iscritti: string) {
        this.titolo_corso = titolo_corso;
        this.descrizione = descrizione;
        this.settore_professionale = settore_professionale;
        this.durata = durata;
        this.elenco_iscritti = elenco_iscritti;
    }

    aggiungi_partecipante(): void {
        throw new Error("Method not implemented.");
    }
}