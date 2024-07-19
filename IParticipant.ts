import { ICourse } from './ICourse';

export interface IParticipant {
    firstName: string;
    lastName: string;
    countryOfOrigin: string;
    educationLevel: string;
    languageSkills: string;
    fieldOfStudy: string;
    enrollInCourse(course: ICourse): void;
}