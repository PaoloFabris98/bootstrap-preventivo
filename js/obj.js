import * as funct from "./funct.js";

////////////////////////////////////////////////////////////////////////////////////////

const min = Number(10);
const max = Number(100);

////////////////////////////////////////////////////////////////////////////////////////


//tipi di lavoro secondo esercizio
export const jobCost = [
  {
    name: "sviluppo backend",
    paga: Number(funct.getRandomNumber(min, max)),
  },
  {
    name: "sviluppo frontend",
    paga: Number(funct.getRandomNumber(min, max)),
  },
  {
    name: "analisi progettuale",
    paga: Number(funct.getRandomNumber(min, max)),
  },
];

////////////////////////////////////////////////////////////////////////////////////////


//codici sconto
export const codes = [
  {
    promcode: "YHDNU32",
    isValid: true,
    discount: Number(25),
  },
  {
    promcode: "JANJC63",
    isValid: false,
    discount: Number(0),
  },
  {
    promcode: "PWKCN25",
    isValid: false,
    discount: Number(0),
  },
  {
    promcode: "SJDPO96",
    isValid: false,
    discount: Number(0),
  },
  {
    promcode: "POCIE24",
    isValid: false,
    discount: Number(0),
  },
];

////////////////////////////////////////////////////////////////////////////////////////


// creazione oggetti in base alle loro varie posizioni nel form + opzioni di logica dei dati
export const fields = [
  {
    id: "submit",
    validation: false,
    autoValidation: false,
    autoValue: false,
    toLower: false,
    toCheck: false,
    field: document.getElementById("submit"),
    valu: "",
    err: "",
  },
  {
    id: "name",
    validation: true,
    autoValidation: true,
    autoValue: true,
    toLower: false,
    toCheck: false,
    field: document.getElementById("nameInput"),
    valu: "",
    err: document.getElementById("nameAllert"),
  },
  {
    id: "surname",
    validation: true,
    autoValidation: true,
    autoValue: true,
    toLower: false,
    toCheck: false,
    field: document.getElementById("surnameInput"),
    valu: "",
    err: document.getElementById("surnameAllert"),
  },
  {
    id: "email",
    validation: true,
    autoValidation: false,
    autoValue: true,
    toLower: true,
    toCheck: false,
    field: document.getElementById("emailInput"),
    valu: "",
    err: document.getElementById("emailAllert"),
  },
  {
    id: "job",
    validation: true,
    autoValidation: false,
    autoValue: true,
    toLower: false,
    toCheck: false,
    field: document.getElementById("jobSelect"),
    valu: Number(0),
    err: document.getElementById("jobAllert"),
  },
  {
    id: "text",
    validation: true,
    autoValidation: true,
    autoValue: true,
    toLower: false,
    toCheck: false,
    field: document.getElementById("textArea"),
    valu: "",
    err: document.getElementById("textAllert"),
  },
  {
    id: "prom",
    validation: true,
    autoValidation: false,
    autoValue: true,
    toLower: true,
    toCheck: false,
    field: document.getElementById("promCode"),
    valu: "",
    err: document.getElementById("promAllert"),
  },
  {
    id: "privacy",
    validation: true,
    autoValidation: false,
    autoValue: true,
    toLower: false,
    toCheck: true,
    field: document.getElementById("privacy"),
    valu: false,
    err: document.getElementById("privacyAllert"),
  },
];
