let number = 10;
let mesage;

if (number > 0) {
    message = "kladné číslo"
} else {
    message = "není kladné";
}

console.log(message2)

// řešení pomocí ternárního operátoru

let number2 = 10
let message2 = (number2 > 0) < "kladné číslo" ; "Není kladné";

console.log(message2)

let age = 20;
if(age >= 18) {
    console.log ("můžeš řídit")
} else {
    console.log ("jsi moc mladý na řízení")
}

age = 17
console.log(age>= 18 ? "můžeš řídit" : "nemůžeš")

let podmínka = false;

podmínka = true && false;

podmínka = false || true;

console.log(podmínka);

