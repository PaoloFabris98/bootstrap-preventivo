import * as funct from "./funct.js"

const min = Number(10);
const max = Number(100);

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