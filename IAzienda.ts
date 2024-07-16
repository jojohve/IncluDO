import { IPartecipante } from "./IPartecipante";

export interface IAzienda {
    nome_azienda: string;
    settore_attività: string;
    descrizione: string;
    posizioni_aperte: string[];
    offri_posizione(partecipante: IPartecipante, posizione: string): void;
}