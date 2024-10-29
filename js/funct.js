import * as obj from "./obj.js";

export function isString(word) {
  return typeof word === "string";
}

////////////////////////////////////////////////////////////////////////////////////////

export function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

////////////////////////////////////////////////////////////////////////////////////////

export function getRandomNumber(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

////////////////////////////////////////////////////////////////////////////////////////

export function autoValues() {
  for (let i = 0; i < obj.fields.length; i++) {
    if (obj.fields[i].autoValue === true) {
      if(obj.fields[i].id === "privacy"){
        obj.fields[i].valu = obj.fields[i].field.checked;
      } else if (obj.fields[i].toLower === false) {
        obj.fields[i].valu = obj.fields[i].field.value;
      } else if (obj.fields[i].toLower === true) {
        obj.fields[i].valu = obj.fields[i].field.value.toLowerCase();
      }
    }
  }
}
