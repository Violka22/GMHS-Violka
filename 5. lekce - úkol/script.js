let age = 30;
let isTuesday = false;
let hasLoyaltyCard = true;

let price;

if (age < 3) {
    price = 0;
} else if (isTuesday) {
    price = 5;
} else if (age <= 12) {
    price = 5;
} else if (age <= 17) {
    price = 7;
} else if (age <= 64) {
    price = 10;
} else {
    price = 6;
}

//sleva věrnostní kartou
if (price < 0) {
    price = 0;
}

console.log("cena lístku je $ " + price);