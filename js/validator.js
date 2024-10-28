import * as populator from "./populator.js";
import * as funct from "./funct.js";
import * as obj from "./obj.js";

////////////////////////////////////////////////////////////////////////////////////////

const emailField = obj.fields[3].field;
const jobField = obj.fields[4].field;
const privacyField = obj.fields[7].field;

////////////////////////////////////////////////////////////////////////////////////////

const emailErr = obj.fields[3].err;
const jobErr = obj.fields[4].err;
const promErr = obj.fields[6].err;
const privacyErr = obj.fields[7].err;

////////////////////////////////////////////////////////////////////////////////////////
export function validation() {
  let err = 0;

  for (let i = 1; i < obj.fields.length; i++) {
    if (obj.fields[i].autoValidation === true) {
      if (
        !funct.isString(obj.fields[i].valu) ||
        obj.fields[i].valu === "" ||
        !isNaN(obj.fields[i].valu)
      ) {
        err++;
        obj.fields[i].field.classList.remove("border-success");
        obj.fields[i].field.classList.add("border-danger");
        populator.error(obj.fields[i].err);
      } else {
        obj.fields[i].field.classList.remove("border-danger");
        obj.fields[i].field.classList.add("border-success");
        populator.removeAlert(obj.fields[i].err);
      }
    } else {
      ////////////////////////////////////////////
      if (
        !funct.isString(obj.fields[3].valu) ||
        obj.fields[3].valu === "" ||
        !funct.validateEmail(obj.fields[3].valu) ||
        !isNaN(obj.fields[3].valu)
      ) {
        err++;
        emailField.classList.remove("border-success");
        emailField.classList.add("border-danger");
        populator.error(emailErr);
      } else {
        emailField.classList.remove("border-danger");
        emailField.classList.add("border-success");
        populator.removeAlert(emailErr);
      }
      ////////////////////////////////////////////
      if (
        obj.fields[4].valu === "Seleziona il lavoro" ||
        !funct.isString(obj.fields[4].valu)
      ) {
        err++;
        jobField.classList.remove("border-success");
        jobField.classList.add("border-danger");
        populator.error(jobErr);
      } else {
        jobField.classList.remove("border-danger");
        jobField.classList.add("border-success");
        populator.removeAlert(jobErr);
      }
      ////////////////////////////////////////////
      if (!funct.isString(obj.fields[6].valu)) {
        err++;
        populator.error(promErr);
      } else {
        populator.removeAlert(promErr);
      }
      ////////////////////////////////////////////
      if (!obj.fields[7].valu) {
        err++;
        privacyField.classList.remove("border-success");
        privacyField.classList.add("border-danger");
        populator.error(privacyErr);
      } else {
        privacyField.classList.remove("border-danger");
        privacyField.classList.add("border-success");
        populator.removeAlert(privacyErr);
      }
      ////////////////////////////////////////////
    }
  }

  return err;
}
////////////////////////////////////////////////////////////////////////////////////////

export function promCodeValidator(prom) {
  for (let i = 0; i < obj.codes.length; i++) {
    if (
      prom === obj.codes[i].promcode.toLocaleLowerCase() &&
      obj.codes[i].isValid
    ) {
      return [Number(obj.codes[i].discount), true];
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////
