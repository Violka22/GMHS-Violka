//Vnořené podmínky

let isloggednIn = true;
let isAdmin = false;

if (isloggednIn) {
    console.log("vítej na stránce");

    if (isAdmin) {
        console.log("Přístup do adminu povolen")
    } else {
        console.log("jsi příhlášen jako užívatel!")
    }
} else {
    console.log("nejsi příhlášený");
}

let age = 31;
let hasDrivrLicense = true;

if (age <= 18 && hasDriverlicense) {             //&& - pravý alt gr a C
    console.log("Můžeš řídit!")
} else {
    console.log("nemůžeš řídit")
}

let isHoliday = false;
let isWeekend = true;

if (isHoliday || isWeekend) {                   //|| - pravý alt gr a W
    console.log("je čas relaxovat");
} else {
    console.log("musíme pracovat!")
}