// ============================================================
// Exercici 1 - JavaScript Basics
// ============================================================

// --- Ex01 - Hola món ---
console.log("Hola, món!");


// --- Ex02 - Constants i Variables ---
let nom = "Marc";
const edat = 25;
let ciutat;
ciutat = "Barcelona";

console.log(nom);
console.log(edat);
console.log(ciutat);

// --- Ex03 - Operacions bàsiques ---

let numero = 3;

console.log(numero * 2);

// --- Ex04 - Template Strings ---
const nomJugador = 'Victor';
const NPC = `Hola, ${nomJugador}! Preparat per l’aventura?`;
console.log(NPC);

// --- Ex05 - Calculadora simple ---

let numero1 = 7;
let numero2 = 3;
let operacio = "+";

switch (operacio) {
case "+":
    console.log(`Resultat: ${numero1 + numero2}`);
    break;

case "-":
    console.log(`Resultat: ${numero1 - numero2}`);
    break;

case "*":
    console.log(`Resultat: ${numero1 * numero2}`);
    break;

case "/":
    if (numero2 === 0) {
        console.log("Error: no es pot dividir per zero");
    } else {
        console.log(`Resultat: ${numero1 / numero2}`);
    }
    break;

default:
    console.log("Operació no reconeguda");
}

// --- Ex06 - Parell o senar? ---
let aleatori = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
console.log(aleatori);

if (aleatori % 2 === 0) {
    console.log("par");
} else {
    console.log("impar");
}


// --- Ex07 - Taula de Multiplicar ---
let numTaula = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${numTaula}x${i} = ${numTaula * i}`);
}

// --- Ex08 - Mitjana de Notes ---
let notes = [8,7,5,2]
let acumulador = 0;

for (let i = 0; i < notes.length; i++) {
    acumulador += notes[i];
}
let mitjana = acumulador / notes.length;
console.log(`Mitjana de notes: ${mitjana}`);

// --- Ex09 - Dies de la setmana (switch) ---
let numDia = 2;
switch (numDia) {
    case 1: console.log("Dilluns"); break;
    case 2: console.log("Dimarts"); break;
    case 3: console.log("Dimecres"); break;
    case 4: console.log("Dijous"); break;
    case 5: console.log("Divendres"); break;
    case 6: console.log("Dissabte"); break;
    case 7: console.log("Diumenge"); break;
    default:
    if (typeof numDia !== "number" || isNaN(numDia)) {
        console.log("Error: el valor no és numèric");
    } else {
        console.log("Error: el valor ha d'estar entre 1 i 7");
    }
}
 
 
// --- Ex10 - Dies de la setmana (array) ---
let diesSetmana = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];
console.log(diesSetmana);
console.log(`Primer element: ${diesSetmana[0]}`);
console.log(`Últim element: ${diesSetmana[diesSetmana.length - 1]}`);
console.log(`Longitud: ${diesSetmana.length}`);


// --- Ex11 - Vida baixa ---
let vida = 15;
if (vida < 20) {
    console.log("Vida crítica!");
}

// --- Ex12 - Accés Zona del Joc ---
let nivellJugador = 9;
if (nivellJugador >= 10) {
    console.log("pot entrar a la zona premium");
} else {
    console.log("accés denegat");
}

// --- Ex13 - Cofre bloquejat ---
let teClau = false;

if (teClau) {
    console.log("Cofre obert");
} else {
    console.log("Necessites una clau");
}

// --- Ex14 - Dany total ---
let atac = Math.floor(Math.random() * 91) + 10;   // 10-100
let bonus = Math.floor(Math.random() * 11);         // 0-10
let critic = Math.random() < 0.5 ? 1 : 2;          // 1 o 2

let danyTotal = (atac + bonus) * critic;
console.log(`Atac: ${atac}, Bonus: ${bonus}, Crític: ${critic}`);
console.log(`Dany total: ${danyTotal}`);

// --- Ex15 - Sistema de recompenses ---
let punts = 75;
if (punts > 100) {
    console.log("Or");
} else if (punts > 50) {
    console.log("Plata");
} else {
    console.log("Bronze");
}

// --- Ex16 - Enemics derrotats ---
let numEnemics = 5;
for (let i = 1; i <= numEnemics; i++) {
    console.log(`Enemic derrotat ${i}`);
}


// --- Ex17 - Objectes inventari ---
let inventari = ["espasa", "escut", "poció"];
for (let i = 0; i < inventari.length; i++) {
    console.log(`Element${i + 1}: ${inventari[i]}`);
}

// --- Ex18a - Buscar objectes inventari ---
let inventari2 = ["espasa", "escut", "poció"];
console.log(inventari2.includes("poció") ? "Tens una poció" : "No tens cap poció");
console.log(inventari2.includes("daga") ? "Tens una daga" : "No tens cap daga");

// --- Ex18b - Nivell màxim ---
let nivells = [12, 45, 8, 67, 33];
console.log(`Nivell més alt: ${Math.max(...nivells)}`);


// --- Ex19 - Funció de salutació ---
function saludarJugador(nom) {
    console.log(`Benvingut/da, ${nom}!`);
}

saludarJugador("Arwen");
saludarJugador("Legolas");
saludarJugador("Gandalf");
saludarJugador("Frodo");

// --- Ex20 - Funció d’atac ---
// --- Ex20 - Funció d'atac ---
function calcularDany(atac, defensa) {
    return atac - defensa;
}

let dany = calcularDany(50, 20);
console.log(`Dany total: ${dany}`);


// --- Ex21 - Mostrar enemics forts ---
let nivellsEnemics = [30, 55, 70, 20, 90, 45];
for (let i = 0; i < nivellsEnemics.length; i++) {
    if (nivellsEnemics[i] > 50) {
        console.log(`Enemic fort: nivell ${nivellsEnemics[i]}`);
    }
}

// --- Ex22a - Longitud del nom del jugador ---
function mostrarLongitudNom(nom) {
    console.log(`El nom "${nom}" té ${nom.length} caràcters`);
}

mostrarLongitudNom("Arwen");


// --- Ex22b - Mostrar les propietats del jugador ---
let jugador = { nom: "pep", nivell: 10, vida: 70 };
console.log(`Nom: ${jugador.nom}`);
console.log(`Nivell: ${jugador.nivell}`);
console.log(`Vida: ${jugador.vida}`);


