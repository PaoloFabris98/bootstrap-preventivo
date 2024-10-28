import * as funct from "./funct.js";

////////////////////////////////////////////////////////////////////////////////////////

const min = Number(10);
const max = Number(100);

////////////////////////////////////////////////////////////////////////////////////////

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

export const fields = [
  {
    id: "submit",
    autoValidation: false,
    field: document.getElementById("submit"),
    valu: "",
    err: "",
  },
  {
    id: "name",
    autoValidation: true,
    field: document.getElementById("nameInput"),
    valu: "",
    err: document.getElementById("nameAllert"),
  },
  {
    id: "surname",
    autoValidation: true,
    field: document.getElementById("surnameInput"),
    valu: "",
    err: document.getElementById("surnameAllert"),
  },
  {
    id: "email",
    autoValidation: false,
    field: document.getElementById("emailInput"),
    valu: "",
    err: document.getElementById("emailAllert"),
  },
  {
    id: "job",
    autoValidation: false,
    field: document.getElementById("jobSelect"),
    valu: Number(0),
    err: document.getElementById("jobAllert"),
  },
  {
    id: "text",
    autoValidation: true,
    field: document.getElementById("textArea"),
    valu: "",
    err: document.getElementById("textAllert"),
  },
  {
    id: "prom",
    autoValidation: false,
    field: document.getElementById("promCode"),
    valu: "",
    err: document.getElementById("promAllert"),
  },
  {
    id: "privacy",
    autoValidation: false,
    field: document.getElementById("privacy"),
    valu: false,
    err: document.getElementById("privacyAllert"),
  },
]