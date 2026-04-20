// ============================================
// EXRCICI 1: INVENTARI DE MINECRAFT
// ============================================
// OBJECTIU: Practicar la selecció d'elements i modificació de text
//
// CONCEPTES QUE NECESSITARÀS:
// - document.querySelector() --> per seleccionar elements per ID
// - .textContent --> per modificar el text d'un element
//
// ============================================

// TASCA 1: Afegir "Espasa de diamant" al slot 1
const espasa = (document.querySelector('#item-1').textContent = 'Espasa de diamant');

// TASCA 2: Afegir "Torxa x64" al slot 5
const torxa = (document.querySelector('#item-5').textContent = 'Torxa x64');

// TASCA 3: Afegir "Pa x12" al slot 9
const pa = (document.querySelector('#item-9').textContent = 'Pa x12');

// TASCA FINAL: Afegeix més objectes!
// ------------------------------------------------
// Afegir els objectes als slots buits:
// - "Pic de ferro" --> slot 2
const pic = (document.querySelector('#item-2').textContent = 'Pic de ferro');

// - "Pala d'or" --> slot 3
const pala = (document.querySelector('#item-3').textContent = "Pala d'or");

// - "Armadura de diamant" --> slot 4
const armadura = (document.querySelector('#item-4').textContent = 'Armadura de diamant');

// - "Arc" --> slot 6
const arc = (document.querySelector('#item-6').textContent = 'Arc');

// - "Fletxes x32" --> slot 7
const fletxes = (document.querySelector('#item-7').textContent = 'Fletxes x32');

// - "Poció de curació" --> slot 8
const pocio = (document.querySelector('#item-8').textContent = 'Poció de curació');
