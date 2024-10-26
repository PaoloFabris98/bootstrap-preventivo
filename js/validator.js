import * as populator from "./populator.js";
import * as funct from "./funct.js";
import * as main from "./main.js";
const nameErr = document.getElementById("nameAllert");
const surnameErr = document.getElementById("surnameAllert");
const emailErr = document.getElementById("emailAllert");
const jobErr = document.getElementById("jobAllert");
const textErr = document.getElementById("textAllert");
const promErr = document.getElementById("promAllert");
const privacyErr = document.getElementById("privacyAllert");

export function validation(name, surname, email, job, text, prom, privacy) {
    let err = 0;
  if (!funct.isString(name) || name === "") {
    err++;
    main.nameField.classList.remove("border-success");
    main.nameField.classList.add("border-danger");
    populator.error(nameErr);
  } else {
    main.nameField.classList.remove("border-danger");
    main.nameField.classList.add("border-success");
    populator.removeAlert(nameErr);
  }

  if (!funct.isString(surname) || surname === "") {
    err++;
    main.surnameField.classList.remove("border-success");
    main.surnameField.classList.add("border-danger");
    populator.error(surnameErr);
  } else {
    main.surnameField.classList.remove("border-danger");
    main.surnameField.classList.add("border-success");
    populator.removeAlert(surnameErr);
  }
  if (!funct.isString(email) || email === "" || !funct.validateEmail(email)) {
    err++;
    main.emailField.classList.remove("border-success");
    main.emailField.classList.add("border-danger");
    populator.error(emailErr);
  } else {
    main.emailField.classList.remove("border-danger");
    main.emailField.classList.add("border-success");
    populator.removeAlert(emailErr);
  }

  if (job === "Seleziona il lavoro" || !funct.isString(job)) {
    err++;
    main.jobField.classList.remove("border-success");
    main.jobField.classList.add("border-danger");
    populator.error(jobErr);
  } else {
    main.jobField.classList.remove("border-danger");
    main.jobField.classList.add("border-success");
    populator.removeAlert(jobErr);
  }

  if (!funct.isString(text) || text === "") {
    err++;
    main.textField.classList.remove("border-success");
    main.textField.classList.add("border-danger");
    populator.error(textErr);
  } else {
    main.textField.classList.remove("border-danger");
    main.textField.classList.add("border-success");
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
    main.privacyField.classList.remove("border-success");
    main.privacyField.classList.add("border-danger");
    populator.error(privacyErr);
  } else {
    main.privacyField.classList.remove("border-danger");
    main.privacyField.classList.add("border-success");
    populator.removeAlert(privacyErr);
  }
  return err;
}
