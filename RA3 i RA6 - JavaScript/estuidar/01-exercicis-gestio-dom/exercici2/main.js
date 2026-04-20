// ============================================
// EXERCICI 2: STATS DE POKÉMON
// ============================================
// OBJECTIU: Practicar textContent amb TEMPLATE LITERALS
//
// CONCEPTES QUE NECESSITARÀS:
// - document.querySelector() --> per seleccionar elements
// - .textContent --> per modificar text
// - Template Literals --> `Text ${variable}` (amb cometes invertides  i ${})
//
// ============================================

// VARIABLES INICIALS (Ja venen predefinides per la tasca)
let nomPokemon = 'Raichu';
let ps = 60;
let atac = 80;
let defensa = 70;
let velocitat = 90;

// ============================================
// TASCA 1: Actualitzar el NOM del Pokémon
// ============================================
const nompoke = document.querySelector('#nom');
nompoke.textContent = `${nomPokemon}` 

// ============================================
// TASCA 2: Actualitzar els PS (Punts de Salut)
// ============================================
const puntssalut = document.querySelector('#ps');
puntssalut.textContent = `PS: ${ps}/100` 

const barrasalut = document.querySelector('.stat-value.ps');
barrasalut.style.setProperty('width',`${ps}%`);

// ============================================
// TASCA 3: Actualitzar l'ATAC
// ============================================
const puntsatac = document.querySelector('#atac');
puntsatac.textContent = `PS: ${atac}/100` 

const barraatac = document.querySelector('.stat-value.atac');
barraatac.style.setProperty('width',`${atac}%`);

// ============================================
// TASCA 4: Actualitzar la DEFENSA
// ============================================
const puntsdef = document.querySelector('#defensa');
puntsdef.textContent = `PS: ${defensa}/100` 

const barradef = document.querySelector('.stat-value.defensa');
barradef.style.setProperty('width',`${defensa}%`);

// ============================================
// TASCA 5: Actualitzar la VELOCITAT
// ============================================
const puntsvelo = document.querySelector('#velocitat');
puntsvelo.textContent = `PS: ${velocitat}/100` 

const barravelo = document.querySelector('.stat-value.velocitat');
barravelo.style.setProperty('width',`${defensa}%`);


// ============================================
// TASCA FINAL: Actualitza l'amplada de les barres visuals
// ============================================
// Utilitza style.setProperty per canviar l'estil 'width' de cada barra segons el valor de la variable corresponent.
// Exemple: barraPS.style.setProperty('width', `${ps}%`);

// ============================================
// TASCA OPCIONAL: Fes que el Pikachu evolucioni a Raichu
// ============================================
// - Canvia nomPokemon a "Raichu"
// - Canvia ps a 60
// - Canvia atac a 80
// - Canvia defensa a 70
// - Canvia velocitat a 90
// - Canvia la imatge del Pokémon (amb setAttribute canvia l'src i l'alt de l'element img)
const fotopoke = document.querySelector('img');
fotopoke.setAttribute('src', './img/raichu.webp'); 

const altpoke = document.querySelector('img');
altpoke.setAttribute('alt', 'raichu'); 

