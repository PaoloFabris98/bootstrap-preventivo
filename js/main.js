import * as populator from "./populator.js";
import * as funct from "./funct.js";

const buttonSubmit = document.getElementById("submit");
const nameField = document.getElementById("nameInput");
const surnameField = document.getElementById("surnameInput");
const emailField = document.getElementById("emailInput");
const jobField = document.getElementById("jobSelect");
const textField = document.getElementById("textArea");
const promField = document.getElementById("promCode");
const privacyField = document.getElementById("privacy");

const nameErr = document.getElementById("nameAllert");
const surnameErr = document.getElementById("surnameAllert");
const emailErr = document.getElementById("emailAllert");
const jobErr = document.getElementById("jobAllert");
const textErr = document.getElementById("textAllert");
const promErr = document.getElementById("promAllert");
const privacyErr = document.getElementById("privacyAllert");

populator.navBar();

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const name = nameField.value;
  const surname = surnameField.value;
  const email = emailField.value;
  const job = jobField.value;
  const text = textField.value;
  const prom = promField.value;
  const privacy = privacyField.checked;

  let err = 0;

  console.log(name);
  console.log(surname);
  console.log(email);
  console.log(job);
  console.log(text);
  console.log(prom);
  console.log(privacy);

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
  if (!funct.isString(email) || email === "") {
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

  if (!(err != 0)) {
  }
});
