/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  /*Siempre es buena practica diferenciar bien las variables cuando una persona externa lea el codigo */
  let pronoun_Domain = ["the", "our"];
  let adj_Domain = ["great", "big", "ugly", "beautiful", "last"];
  let noun_Domain = ["jogger", "racoon"];
  let footer_Domain = [".com", ".net", ".org", ".gov", ".io", ".ui", ".us"];

  let domain =
    adj_Domain[getRandom(adj_Domain.length)] +
    "" +
    noun_Domain[getRandom(noun_Domain.length)] +
    "" +
    footer_Domain[getRandom(footer_Domain.length)];

  function getRandom(arrayLength) {
    let number = Math.floor(Math.random() * arrayLength);
    return number;
  }

  let domainNames = [];

  pronoun_Domain.forEach(a1 =>
    adj_Domain.forEach(a2 =>
      noun_Domain.forEach(a3 =>
        footer_Domain.forEach(a4 => domainNames.push(a1 + a2 + a3 + a4))
      )
    )
  );

  console.log(domainNames);
};
