const qS = (el) => document.querySelector(el);
const qSAll = (el) => document.querySelectorAll(el);

const billValue = qS("#bill");

const tipValue = qS("#tip");

const peopleQnt = qS("#people");

const calcButton = qS("button");

const resultSpace = qS(".result");

const calcTip = () => {
  let value = parseFloat(billValue.value);
  let tip = tipValue.value;
  let people = parseFloat(peopleQnt.value);
  if (billValue.value != "") {
    let billSplit = (value += value * (tip / 100)) / people;
    resultSpace.style.display = "flex";
    resultSpace.innerHTML = `
  <h2>O valor por pessoa é: <br/><br/>  ${billSplit.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}</h2>
   `;
  }
};

calcButton.addEventListener("click", calcTip);
