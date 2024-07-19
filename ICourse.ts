import { IParticipant } from './IParticipant';

export interface ICourse {
    courseTitle: string;
    description: string;
    professionalField: string;
    duration: string;
    enrolledParticipants: IParticipant[];
    addParticipant(participant: IParticipant): void;
}