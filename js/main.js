import * as populator from "./populator.js";
import * as obj from "./obj.js";
import * as funct from "./funct.js";
import * as val from "./validator.js";

const buttonSubmit = obj.fields[0].field;

const finalPryce1 = document.getElementById("finalPryce1");
const finalPryce2 = document.getElementById("finalPryce2");
const finalPryce3 = document.getElementById("finalPryce3");

const oreLavorate = Number(10); //numero default secondo esercizio

//navbar
populator.navBar();

//popolazione randomica costo jobSelector
populator.jobSelectPopulator(obj.jobCost.length);

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();

  //estrazione dei valori dal form
  funct.autoValues();

  //validazione valori del form + controllo se dati errati
  let err = val.validation();

  console.log(obj.fields[1].valu);
  console.log(obj.fields[2].valu);
  console.log(obj.fields[3].valu);
  console.log(obj.fields[4].valu);
  console.log(obj.fields[5].valu);
  console.log(obj.fields[6].valu);
  console.log(obj.fields[7].valu);


  if (err == 0) {
    //calcolo prezzo ed eventuale sconto//
    let price = Number(0);
    let pay = Number(obj.jobCost[obj.fields[4].valu - 1].paga);
    let discountQuantity = Number(0);
    let discount = Number(0);
    let discauntValue = false;
    let priceDiscounted = Number(0);

    if (obj.fields[6].valu != "") {
      let temp = val.promCodeValidator(obj.fields[6].valu);
      discountQuantity = temp[0];
      discauntValue = temp[1];
    }

    price = Number((pay * oreLavorate).toFixed(2));
    discount = Number(((price / 100) * discountQuantity).toFixed(2));
    priceDiscounted = Number((price - discount).toFixed(2));

    //////////////////////////////////////

    //creazione valori personalizzati da mostrare a schermo//
    let priceStr = price.toFixed(2);
    let [intPart, decimalPart] = priceStr.split(".");
    let discountStr = discount.toFixed(2);
    let [discountIntPart, discountDecimalPart] = discountStr.split(".");
    let priceDiscountedStr = priceDiscounted.toFixed(2);
    let [priceDiscountedIntPart, priceDiscountedDecimalPart] =
      priceDiscountedStr.split(".");

    if (discauntValue === true) {
      finalPryce1.innerHTML = `
  <b>Prezzo</b><br>
  € <b>${intPart}</b>,${decimalPart}
`;
      finalPryce2.innerHTML = `
<b>Sconto</b><br>
  € <b>${discountIntPart}</b>,${discountDecimalPart}
`;
      finalPryce3.innerHTML = `
<b>Prezzo Finale</b><br>
  € <b>${priceDiscountedIntPart}</b>,${priceDiscountedDecimalPart}
`;
    } else {
      finalPryce1.innerHTML = `
  <b>Prezzo Finale</b><br>
  € <b>${intPart}</b>,${decimalPart}
`;
      finalPryce2.innerHTML = "";
      finalPryce3.innerHTML = "";
    }
  }
});
