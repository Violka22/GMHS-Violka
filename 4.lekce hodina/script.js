//pokud je podmínka splněna

let age = 31;
if (age > 20) {                                                  //složená závorka - alt gr + B
    console.log("věk je větší než 20")
}

//pokud podmínka není splněna - přidám else

let age2 = 3;
if (age > 20) {
    console.log("věk je větší než 20")
} else {
    console.log("věk je 20 nebo méně")
}

//pokud je podmínka splněna + něco co nechápu

let age3 = 21;
if (age > 20) {
    console.log(`věk je větší než 20.Tvůj věk je ${age}`);         //zpětné závorky - alt gr + 7(ta nahoře)
} else {
    console.log("věk je 20 nebo méně")
}