let billInput = document.getElementById("display-bill");
let peopleInput = document.getElementById("display-people");
let tipValue = document.getElementById("tip-value");
let total = document.getElementById("total-value");


const reset = document.getElementById("reset");
const tipButtons = document.querySelectorAll(".btn");
const tipCustom = document.querySelector(".btn-custom");

let bill = "";
let people = 1;
let tip = 0.00;

billInput.addEventListener("input", billFunc);
peopleInput.addEventListener("input", peopleFunc);
tipButtons.forEach(function(val){
    val.addEventListener("click", handleClick)
});

tipCustom.addEventListener("input", tipInputFunc);

function billFunc() {
    bill = billInput.value;

    if (bill > 0) {
        reset.classList.remove("btn-noclick");
        console.log(bill);
        // console.log("Revomendo a classe nonclick");
        calculate()
    } else {
        reset.classList.add("btn-noclick");
        // console.log("Adicionando a classe nonclick");
    }
}

function peopleFunc() {
    people = peopleInput.value;

    if (people >= 1) {
        // console.log(`Quantidade de pessoas: ${people}`);
        calculate()
    } else {
        peopleInput.value = 1;
    }
}

function tipInputFunc() {
    tipValue = parseFloat(tipCustom.value / 100);
    console.log(tipValue);

    if (tipValue !== Number) {
        tipValue = 0.00;
    } else {
        tipButtons.forEach(function(val) {
            val.classList.remove("btn-active");
        });
    }

    calculate();
}

function handleClick(event) {
    tipButtons.forEach(function (val) {
        val.classList.remove("btn-active");

        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add("btn-active");
            tip = parseFloat(val.innerHTML) / 100;
            console.log(`A gorjeta é de ${tip}%`)
        }
    })

    calculate()
}

function calculate() {
    let tipAmount = (bill * tip) / people;
    // console.log(`${tipAmount} de gorjeta pra cada`);
    let totalAmount = (bill * (tip + 1)) / people;
    // console.log(`${total} ao total, pra cada um das ${people} pessoas`);
    tipValue.innerText = `$${tipAmount.toFixed(2)}`
    console.log(tipValue);
    total.innerText = `$${totalAmount.toFixed(2)}`
}

