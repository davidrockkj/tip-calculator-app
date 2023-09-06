let displayBill = document.getElementById("display-bill");
let displayPeople = document.getElementById("display-people");
let tipValue = document.getElementById("tip-value");
let totalValue = document.getElementById("total-value");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const reset = document.getElementById("reset");


displayBill.addEventListener("input", billFunc);
// displayBill.addEventListener("onblur", totalFunc);
displayPeople.addEventListener("input", peopleFunc);
totalValue.addEventListener("input", totalFunc);

// displayBill.value = "0.0";
displayPeople.value = "1";
tipValue.innerHTML = "$" + (0.0).toFixed(2);
totalValue.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tip = 1.00;

reset.disabled = true;

function billFunc() {
    billValue = parseFloat(displayBill.value);
    console.log(displayBill.value);

    if (displayBill.value > 0.00) {
        reset.disabled = false;
        reset.classList.remove("btn-noclick");
        console.log("SEM btn-noclick");
        tipFunc()
        totalFunc();
    } else {
        displayBill.value = "";
        reset.disabled = true;
        reset.classList.add("btn-noclick");
        console.log("COM btn-noclick");
        tipValue.innerText = "$0.00";
        totalValue.innerText = "$0.00";
    }
}

function peopleFunc() {
    if (displayPeople.value >= 1) {
        peopleValue = displayPeople.value;
        console.log(peopleValue);
        tipFunc()
        totalFunc();
    } else {
        
        peopleValue = 1;
        displayPeople.value = 1;
    }
}

function tipFunc() {
    tipValue.innerText = `$${parseFloat((billValue * (tip-1))/peopleValue).toFixed(2)}`
    console.log(tipValue)
}

function totalFunc() {
    totalValue.innerText = `$${parseFloat((billValue * tip)/peopleValue).toFixed(2)}`;
    console.log(totalValue);
}



// switch (tip) {
//     case value:
        
//         break;

//     default:
//         break;
// }




// function activeReset() {
//     if (bill > 0) {
//         reset.disabled = false;
//         reset.classList.remove("btn-noclick");
//     }
// }

// displayBill.innerHTML = ""

// function getVal() {
//     let bill = document.getElementById("display-bill").value;
//     console.log(bill);
// }

// function verValor() {
//     valor = bill;
//     var texto = valor.toLocaleString("en-US", 
//         { style: "currency" , currency:"USD"});

//     console.log(texto);
// }