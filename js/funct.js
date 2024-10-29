import * as obj from "./obj.js";



//funzione per controllare se il valore è una stringa
export function isString(word) {
  return typeof word === "string";
}

////////////////////////////////////////////////////////////////////////////////////////

// validazione email tramite regex (purtroppo solo con javascript non è possibile controllare se la mail esista)
// comunque la funzione controlla se prima del @ c'è una stringa che può essere formata da: minuscole e maiuscole dalla (a alla z), da numeri dal 1 al 9
// e dai seguenti simboli: . _ % + -
// controlla se c'è una seconda stringa DOPO il @ che rispetta le stesse regole di cui sopra
// infine controlla se dopo il . c'è una terza stringa composta solo da lettere e se è composta da almeno 2 caratteri
export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

////////////////////////////////////////////////////////////////////////////////////////


//funzione per creare numeri randomici con 2 numeri dopo la virgola
export function getRandomNumber(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

////////////////////////////////////////////////////////////////////////////////////////


// funzione per prendere tutti i valori necessari dal form
export function autoValues() {
  for (let i = 0; i < obj.fields.length; i++) {
    if (obj.fields[i].autoValue === true) {
      if(obj.fields[i].toCheck === true){
        obj.fields[i].valu = obj.fields[i].field.checked;
      } else if (obj.fields[i].toLower === false) {
        obj.fields[i].valu = obj.fields[i].field.value;
      } else if (obj.fields[i].toLower === true) {
        obj.fields[i].valu = obj.fields[i].field.value.toLowerCase();
      }
    }
  }
}
