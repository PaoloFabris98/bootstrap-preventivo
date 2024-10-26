import * as populator from "./populator.js";
import * as funct from "./funct.js";
import * as obj from "./obj.js"
import * as val from "./validator.js";

const buttonSubmit = document.getElementById("submit");
const nameField = document.getElementById("nameInput");
const surnameField = document.getElementById("surnameInput");
const emailField = document.getElementById("emailInput");
const jobField = document.getElementById("jobSelect");
const textField = document.getElementById("textArea");
const promField = document.getElementById("promCode");
const privacyField = document.getElementById("privacy");


const finalPryce = document.getElementById("finalPryce");


const oreLavorate = Number(10); //numero default secondo esercizio



populator.navBar();
populator.jobSelectPopulator(obj.jobCost.length);

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const name = nameField.value;
  const surname = surnameField.value;
  const email = emailField.value;
  const job = jobField.value;
  const text = textField.value;
  const prom = promField.value;
  const privacy = privacyField.checked;

  let err = val.validation(name,surname,email,job,text,prom,privacy);;

  console.log(name);
  console.log(surname);
  console.log(email);
  console.log(job);
  console.log(text);
  console.log(prom);
  console.log(privacy);

  

  if (err == 0) {
    let price = Number(0);
    let pay = Number(obj.jobCost[job-1].paga);
    let discountQuantity = Number(0);
    let discount = Number(0);

    if (prom != "") {
      for (let i = 0; i < obj.codes.length; i++) {
        if (prom === obj.codes[i].promcode && obj.codes[i].isValid) {
          discountQuantity = Number(obj.codes[i].discount);
          break;
        }
      }
    }
    price = Number((pay * oreLavorate).toFixed(2));
    discount = Number(((price / 100) * discountQuantity).toFixed(2));
    price = Number((price - discount).toFixed(2));
    let priceStr = price.toFixed(2);
    let [intPart, decimalPart] = priceStr.split(".");

    finalPryce.innerHTML = `
  <b>Prezzo finale</b><br>
  € <b>${intPart}</b>,${decimalPart}
`;

  }
  
});
