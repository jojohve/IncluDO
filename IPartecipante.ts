import { ICorso } from "./ICorso";

export interface IPartecipante {
    nome: string;
    cognome: string;
    paese_di_origine: string;
    livello_di_istruzione: string;
    competenze_linguistiche: string;
    ambito_di_formazione: string;
    iscriviti_corso(corso: ICorso): void;
}