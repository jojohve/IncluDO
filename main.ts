import { IParticipant } from "./IParticipant";
import { ICourse } from './ICourse';
import { ICompany } from './ICompany';

class Participant implements IParticipant {
    firstName: string;
    lastName: string;
    countryOfOrigin: string;
    educationLevel: string;
    languageSkills: string;
    fieldOfStudy: string;

    constructor(firstName: string, lastName: string, countryOfOrigin: string, educationLevel: string, languageSkills: string, fieldOfStudy: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.countryOfOrigin = countryOfOrigin;
        this.educationLevel = educationLevel;
        this.languageSkills = languageSkills;
        this.fieldOfStudy = fieldOfStudy;
    }

    enrollInCourse(course: ICourse): void {
        course.addParticipant(this);
    }
}

class Course implements ICourse {
    courseTitle: string;
    description: string;
    professionalField: string;
    duration: string;
    enrolledParticipants: IParticipant[];

    constructor(courseTitle: string, description: string, professionalField: string, duration: string) {
        this.courseTitle = courseTitle;
        this.description = description;
        this.professionalField = professionalField;
        this.duration = duration;
        this.enrolledParticipants = [];
    }

    addParticipant(participant: IParticipant): void {
        this.enrolledParticipants.push(participant);
    }
}

class Company implements ICompany {
    companyName: string;
    industry: string;
    description: string;
    openPositions: string[];

    constructor(companyName: string, industry: string, description: string, openPositions: string[]) {
        this.companyName = companyName;
        this.industry = industry;
        this.description = description;
        this.openPositions = openPositions;
    }

    offerPosition(participant: IParticipant, position: string): void {
        console.log(`Offered position: ${position} to ${participant.firstName} ${participant.lastName}`);
    }
}

let participant1 = new Participant("Ajeje", "Brazorf", "Serbia", "Scuola primaria", "C1", "Metalmeccanica");
let participant2 = new Participant("Petit", "Londo", "Senegal", "Scuola dell'infanzia", "C2", "Metalmeccanica");
let participant3 = new Participant("Hakan", "Gomussoglu", "Turchia", "Scuola secondaria di primo grado", "B2", "Industria");
let course1 = new Course("Metalmeccanica Base", "Corso dedicato all'apprendimento dell'uso di macchinari per poter lavorare in una catena di montaggio", "Metalmeccanica", "6 mesi");
let course2 = new Course("Industria1", "Corso di apprendimento delle leggi basi per poter inserire il candidato in un ufficio", "Industria", "1 anno");
let company1 = new Company("GTO", "Metalmeccanica", "Azienda che da più di 50 anni distribuisce semiassi in tutta europa.", ["Operaio", "Magazziniere"]);
let company2 = new Company("Uffici Generali", "Industria", "Azienda che opera nel settore delle telecomunicazioni internazionali.", ["Impiegato"]);
console.log(participant1, participant2, participant3);
console.log(company1, company2);

participant1.enrollInCourse(course1);
participant2.enrollInCourse(course1);
participant3.enrollInCourse(course2);
company1.offerPosition(participant1, "Operaio");
company1.offerPosition(participant2, "Magazziniere");
company2.offerPosition(participant3, "Impiegato");

console.log(course1, course2);