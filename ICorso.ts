import { IPartecipante } from "./IPartecipante";

export interface ICorso {
    titolo_corso: string;
    descrizione: string;
    settore_professionale: string;
    durata: string;
    elenco_iscritti: IPartecipante[];
    aggiungi_partecipante(partecipante: IPartecipante): void;
}