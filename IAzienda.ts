interface IAzienda {
    nome_azienda: string;
    settore_attività: string;
    descizione: string;
    posizioni_aperte: string[];
    offri_posizione(): void;
}

export class Azienda implements IAzienda {
    nome_azienda: string;
    settore_attività: string;
    descizione: string;
    posizioni_aperte: string[];

    constructor(nome_azienda: string, settore_attività: string, descizione: string, posizioni_aperte: string[]) {
        this.nome_azienda = nome_azienda;
        this.settore_attività = settore_attività;
        this.descizione = descizione;
        this.posizioni_aperte = posizioni_aperte;
    }

    offri_posizione(): void {
        throw new Error("Method not implemented.");
    }
}