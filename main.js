"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Participant = /** @class */ (function () {
    function Participant(firstName, lastName, countryOfOrigin, educationLevel, languageSkills, fieldOfStudy) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.countryOfOrigin = countryOfOrigin;
        this.educationLevel = educationLevel;
        this.languageSkills = languageSkills;
        this.fieldOfStudy = fieldOfStudy;
    }
    Participant.prototype.enrollInCourse = function (course) {
        course.addParticipant(this);
    };
    return Participant;
}());
var Course = /** @class */ (function () {
    function Course(courseTitle, description, professionalField, duration) {
        this.courseTitle = courseTitle;
        this.description = description;
        this.professionalField = professionalField;
        this.duration = duration;
        this.enrolledParticipants = [];
    }
    Course.prototype.addParticipant = function (participant) {
        this.enrolledParticipants.push(participant);
    };
    return Course;
}());
var Company = /** @class */ (function () {
    function Company(companyName, industry, description, openPositions) {
        this.companyName = companyName;
        this.industry = industry;
        this.description = description;
        this.openPositions = openPositions;
    }
    Company.prototype.offerPosition = function (participant, position) {
        console.log("Offered position: ".concat(position, " to ").concat(participant.firstName, " ").concat(participant.lastName));
    };
    return Company;
}());
var participant1 = new Participant("Ajeje", "Brazorf", "Serbia", "Scuola primaria", "C1", "Metalmeccanica");
var participant2 = new Participant("Petit", "Londo", "Senegal", "Scuola dell'infanzia", "C2", "Metalmeccanica");
var participant3 = new Participant("Hakan", "Gomussoglu", "Turchia", "Scuola secondaria di primo grado", "B2", "Industria");
var course1 = new Course("Metalmeccanica Base", "Corso dedicato all'apprendimento dell'uso di macchinari per poter lavorare in una catena di montaggio", "Metalmeccanica", "6 mesi");
var course2 = new Course("Industria1", "Corso di apprendimento delle leggi basi per poter inserire il candidato in un ufficio", "Industria", "1 anno");
var company1 = new Company("GTO", "Metalmeccanica", "Azienda che da più di 50 anni distribuisce semiassi in tutta europa.", ["Operaio", "Magazziniere"]);
var company2 = new Company("Uffici Generali", "Industria", "Azienda che opera nel settore delle telecomunicazioni internazionali.", ["Impiegato"]);
console.log(participant1, participant2, participant3);
console.log(company1, company2);
participant1.enrollInCourse(course1);
participant2.enrollInCourse(course1);
participant3.enrollInCourse(course2);
company1.offerPosition(participant1, "Operaio");
company1.offerPosition(participant2, "Magazziniere");
company2.offerPosition(participant3, "Impiegato");
console.log(course1, course2);
