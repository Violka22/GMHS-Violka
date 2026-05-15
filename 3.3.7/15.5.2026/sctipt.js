let pozdrav = "zdravím";  //global scope

function sayHello() {   //deklarace funkce
    let pozdravFunkce = "Pozdrav z funkce"
    console.log(pozdravFunkce)
}


if (true) {
    let zprava = "Toto je bloková zpráva"
    console.log(zprava)
}


sayHello();  //volání funkce

function pozdrav2(name) {
    console.log("zdravím" + name);
}

pozdrav2("Honza") 