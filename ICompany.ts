import { IParticipant } from './IParticipant';

export interface ICompany {
    companyName: string;
    industry: string;
    description: string;
    openPositions: string[];
    offerPosition(participant: IParticipant, position: string): void;
}