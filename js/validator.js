import * as populator from "./populator.js";
import * as funct from "./funct.js";
const nameErr = document.getElementById("nameAllert");
const surnameErr = document.getElementById("surnameAllert");
const emailErr = document.getElementById("emailAllert");
const jobErr = document.getElementById("jobAllert");
const textErr = document.getElementById("textAllert");
const promErr = document.getElementById("promAllert");
const privacyErr = document.getElementById("privacyAllert");

export function validation(name, surname, email, job, text, prom, privacy, err) {

  if (!funct.isString(name) || name === "") {
    err++;
    populator.error(nameErr);
  } else {
    populator.removeAlert(nameErr);
  }

  if (!funct.isString(surname) || surname === "") {
    err++;
    populator.error(surnameErr);
  } else {
    populator.removeAlert(surnameErr);
  }
  if (!funct.isString(email) || email === "" || !funct.validateEmail(email)) {
    err++;
    populator.error(emailErr);
  } else {
    populator.removeAlert(emailErr);
  }

  if (job === "Seleziona il lavoro" || !funct.isString(job)) {
    err++;
    populator.error(jobErr);
  } else {
    populator.removeAlert(jobErr);
  }

  if (!funct.isString(text) || text === "") {
    err++;
    populator.error(textErr);
  } else {
    populator.removeAlert(textErr);
  }

  if (!funct.isString(prom)) {
    err++;
    populator.error(promErr);
  } else {
    populator.removeAlert(promErr);
  }
  if (!privacy) {
    err++;
    populator.error(privacyErr);
  } else {
    populator.removeAlert(privacyErr);
  }
}
