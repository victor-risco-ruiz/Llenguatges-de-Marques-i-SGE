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
let nomPokemon = 'Pikachu';
let ps = 35;
let atac = 55;
let defensa = 40;
let velocitat = 75;

// ============================================
// TASCA 1: Actualitzar el NOM del Pokémon
// ============================================
nom.textContent = `${nomPokemon}`;

// ============================================
// TASCA 2: Actualitzar els PS (Punts de Salut)
// ============================================
const vida = document.querySelector('#ps');
vida.textContent = `❤️ PS: ${ps}`;
const barraps = document.querySelector('.stat-value.ps');
barraps.style.setProperty('width', `${ps}%`);

// ============================================
// TASCA 3: Actualitzar l'ATAC
// ============================================
const atacs = document.querySelector('#atac');
atacs.textContent = `⚔️ Atac: ${atac}`;
const barraatac = document.querySelector('.stat-value.atac');
barraatac.style.setProperty('width', `${atac}%`);

// ============================================
// TASCA 4: Actualitzar la DEFENSA
// ============================================
const defe = document.querySelector('#defensa');
defe.textContent = `🛡️ Defensa: ${defensa}`;
const barradefe = document.querySelector('.stat-value.defensa');
barradefe.style.setProperty('width', `${defensa}%`);

// ============================================
// TASCA 5: Actualitzar la VELOCITAT
// ============================================
const velo = document.querySelector('#velocitat');
velo.textContent = `⚡ Velocitat: ${velocitat}`;
const barravelo = document.querySelector('.stat-value.velocitat');
barravelo.style.setProperty('width', `${velocitat}%`);

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

nomPokemon = 'Raichu';
ps = 60;
atac = 80;
defensa = 70;
velocitat = 90;

nom.textContent = `${nomPokemon}`;
vida.textContent = `❤️ PS: ${ps}`;
atacs.textContent = `⚔️ Atac: ${atac}`;
defe.textContent = `🛡️ Defensa: ${defensa}`;
velo.textContent = `⚡ Velocitat: ${velocitat}`;

// - Canvia la imatge del Pokémon (amb setAttribute canvia l'src i l'alt de l'element img)
const img = document.querySelector('img').setAttribute('src', 'img/raichu.webp');
const alt = document.querySelector('img').setAttribute('alt', 'raichu');
