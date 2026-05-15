//FUNKCE//

function ahoj() {
    console.log("ahoj");
    console.log("ahoj");  //deklarace funkce//
}

ahoj();                //zvolání funkce//

let greeting = "nazdárek";

function showGreeting() {
    console.log(greeting);
}

showGreeting();

function funkceUvnitr() {
    let cislo = 123;
    console.log(cislo);
}    

funkceUvnitr();

//PARAMETR A ARGUMENT//

function test(name) {
    console.log("ahoj " + name);
}

test("Tomáš");
test("Ema");
test(123)

function scitani(num1, num2) {
    console.log(num1 + num2)
}

scitani(4,6)

function odcitani(num1, num2) {
    console.log(num1 - num2)
}

odcitani(6,4)

function nasobeni(num1, num2) {
    console.log(num1 * num2)
}

nasobeni(4,6)

function deleni(num1, num2) {
    console.log(num1 / num2)
}

deleni(24,6)

scitani(6,7)

function printRange(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i);
    }
}

printRange(2, 7);
