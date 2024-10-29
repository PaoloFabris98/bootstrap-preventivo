import * as populator from "./populator.js";
import * as funct from "./funct.js";
import * as obj from "./obj.js";

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
      if (obj.fields[i].id === "email") {
        if (
          !funct.isString(obj.fields[i].valu) ||
          obj.fields[i].valu === "" ||
          !funct.validateEmail(obj.fields[i].valu) ||
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
      }
      ////////////////////////////////////////////
      if (obj.fields[i].id === "job") {
        if (
          obj.fields[i].valu === "Seleziona il lavoro" ||
          !funct.isString(obj.fields[i].valu)
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
      }
      ////////////////////////////////////////////
      if (obj.fields[i].id === "prom") {
        if (!funct.isString(obj.fields[i].valu)) {
          err++;
          populator.error(obj.fields[i].err);
        } else {
          populator.removeAlert(obj.fields[i].err);
        }
      }
      ////////////////////////////////////////////
      if (obj.fields[i].id === "privacy") {
        if (!obj.fields[i].valu) {
          err++;
          obj.fields[i].field.classList.remove("border-success");
          obj.fields[i].field.classList.add("border-danger");
          populator.error(privacyErr);
        } else {
          obj.fields[i].field.classList.remove("border-danger");
          obj.fields[i].field.classList.add("border-success");
          populator.removeAlert(obj.fields[i].err);
        }
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
