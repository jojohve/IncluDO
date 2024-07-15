interface IPartecipante {
    nome: string;
    cognome: string;
    paese_di_origine: string;
    livello_di_istruzione: string;
    competenze_linguistiche: string;
    ambito_di_formazione: string;
    iscriviti_corso(): void;
}

export class Partecipante implements IPartecipante {
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

    iscriviti_corso(): void {
        throw new Error("Method not implemented.");
    }
}