let displayBill = document.getElementById("#display-bill");
let displayPeople = document.getElementById("#display-people");
let tipValue = document.getElementById("#tip-value");
let totalValue = document.getElementById("#total-value");

const btn1 = document.getElementById("#btn1");
const btn2 = document.getElementById("#btn2");
const btn3 = document.getElementById("#btn3");
const btn4 = document.getElementById("#btn4");
const btn5 = document.getElementById("#btn5");
const btn6 = document.getElementById("#btn6");
const reset = document.getElementById("#reset");

function activeReset() {
    if (bill > 0) {
        reset.disabled = false;
        reset.classList.remove("btn-noclick");
    }
}

displayBill.innerHTML = ""

function getVal() {
    var bill = document.querySelector("display-bill").value;
    console.log(bill);
}

function verValor() {
    valor = bill;
    var texto = valor.toLocaleString("en-US", 
        { style: "currency" , currency:"USD"});

    console.log(texto);
}