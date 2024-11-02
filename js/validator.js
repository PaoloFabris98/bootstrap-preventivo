import * as populator from "./populator.js";
import * as funct from "./funct.js";
import * as obj from "./obj.js";

////////////////////////////////////////////////////////////////////////////////////////

//funzione per controllare se i dati inseriti sono corretti, ritorna il valore di err, usato poi nel codice per controllare se ci sono dati errati
export function validation() {
  let err = 0;

  for (let i = 0; i < obj.fields.length; i++) {
    if (obj.fields[i].id === "name") {
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
    }
    
    if (obj.fields[i].id === "surname") {
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
    }
    
    if (obj.fields[i].id === "text") {
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
    }
    
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
        populator.error(obj.fields[i].err);
      } else {
        obj.fields[i].field.classList.remove("border-danger");
        obj.fields[i].field.classList.add("border-success");
        populator.removeAlert(obj.fields[i].err);
      }
    }
  }

  return err;
}
////////////////////////////////////////////////////////////////////////////////////////

// funzione per controllare la validità e l'eventuale quantità di sconto
export function promCodeValidator(prom) {
  for (let i = 0; i < obj.codes.length; i++) {
    if (prom === obj.codes[i].promcode.toLowerCase() && obj.codes[i].isValid) {
      return [Number(obj.codes[i].discount), true];
    }
  }
}

////////////////////////////////////////////////////////////////////////////////////////




//TUTTA LA PARTE DENTRO IL FOR SOPRASTANTE DELLA VALIDAZIONE, PUò ESSERE SOSTITUITA CON LA SOTTOSTANTE, SE SI VUOLE UN CONTROLLO PIù "AUTOMATICO"
//potrebbe però risultate un po' complicato da comprendere però

/*

//il primo controllo si accerta se l'oggetto in questione, ha bisogno di essere validato.
    //essenzialmente ogni oggetto ha un campo "validation", che quando impostato su true, dice al codice sottostante che è richiesta una qualche validazione
    //del valore ottenuto dal form

    //TUTTA LA PARTE SOTTOSTANTE PUò ESSERE SOSTITUITA CON IL CODICE ALLA FINE, NEL CASO IN CUI SI VOGLIA UNA VERSIONE SEMPLIFICATA

    if (obj.fields[i].validation === true) {
      //il primo if va a controllare se quello da validare è un valore "standard", ovvero un valore che non ha bisogno di essere formattato o composto in maniera specifica
      //come ad esempio una mail o una password
      //nel caso il valore di "C" sia impostato su true, il codice va a verificare il valore secondo una procedura "standardizzata".
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
        
        //nel caso in cui il valore di "autoValidation", sia impostato su false invece, il codice si aspetta di ricevere le corrette istruzioni
        //per poter controllare che il valore preso dal form sia stato inserito in maniera corretta.
        //come ad esempio il campo "mail", che ha i tre controlli visti sopra ovvero:

        //!funct.isString(obj.fields[i].valu) ||
        //obj.fields[i].valu === "" ||
        //!isNaN(obj.fields[i].valu)

        //ma ha anche bisogno del controllo della mail tramite regex

        //!funct.validateEmail(obj.fields[i].valu)
        
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
            populator.error(obj.fields[i].err);
          } else {
            obj.fields[i].field.classList.remove("border-danger");
            obj.fields[i].field.classList.add("border-success");
            populator.removeAlert(obj.fields[i].err);
          }
        }
        ////////////////////////////////////////////
      }
    }
  }
  */