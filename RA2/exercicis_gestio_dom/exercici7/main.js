// ============================================
// EXERCICI 7: CLASH OF CLANS - CAMP DE BATALLA
// ============================================
// OBJECTIU: Aprendre a combinar createElement, classList i append
//
// CONCEPTES QUE NECESSITARÀS:
// - document.createElement('div') --> Crea un nou element HTML (un div en aquest cas)
// - .classList.add('classe') --> Afegeix una classe CSS
// - elementPare.append(elementFill) --> Afegeix l'element al DOM
// - element.remove() --> Elimina un element del DOM
// - .textContent --> Canvia el text d'un element
//
// ============================================
// SELECCIONAR ELEMENTS DEL DOM
// ============================================

// Zones del camp de batalla
const zonaAliada = document.querySelector('#zona-aliada');
const zonaEnemiga = document.querySelector('#zona-enemiga');

// Comptadors
const comptadorAliats = document.querySelector('#contador-aliats');
const comptadorEnemics = document.querySelector('#contador-enemics');
const comptadorTotal = document.querySelector('.stat-value.yellow');

// Variables per comptar tropes
let totalAliats = 0;
let totalEnemics = 0;

// ============================================
// ZONA ALIADA - DESPLEGAR LES TEVES TROPES
// ============================================

// ============================================
// TASCA 1 - TROPA ALIADA 1: BÀRBAR
// ============================================

// PUNT 1: Crear un nou element <div> per al Bàrbar
const barbarDIV = document.createElement('div');

// PUNT 2: Afegir la classe 'tropa' i la classe 'barbarian' al Bàrbar
barbarDIV.classList.add('tropa','barbarian')

// PUNT 3: Crea un nou element <img> per a la imatge del Bàrbar
const barbarIMG = document.createElement('img');

// PUNT 4: Crear un nou element <p> per al nom del Bàrbar
const barbarNOM = document.createElement('p');

// PUNT 5: Crear un nou element <p> per a les estadístiques del Bàrbar
const barbarSTATS = document.createElement('p');

// PUNT 6: Modifica l'atribut src de la imatge del Bàrbar i el seu alt text <img>
barbarIMG.setAttribute('src','./img/barbarian.webp')
barbarIMG.setAttribute('alt','Barbars')

// PUNT 7: Afegir el nom del Bàrbar a l'element nom <p
barbarNOM.textContent = 'Barbar'
barbarNOM.style.fontWeight = 'Bold';


// PUNT 8: Afegir les estadístiques del Bàrbar al seu element <p>
barbarSTATS.textContent = '❤️ 78 • ⚔️ 16'
barbarSTATS.style.fontWeight = 'Bold';

// PUNT 9: Afegir la imatge, el nom i les estadístiques al div del Bàrbar
barbarDIV.append(barbarNOM,barbarSTATS,barbarIMG)

// PUNT 10: Afegir el Bàrbar a la zonaAliada
zonaAliada.append(barbarDIV);

// PUNT 11: Actualitzar el comptador d'aliats "totalAliats"
totalAliats ++;

// PUNT 12: Actualitzar el div de text del comptador d'aliats amb textContent
comptadorAliats.textContent = totalAliats;



// ============================================
// TASCA 2 - TROPA ALIADA 2: ARQUERA
// ============================================
// classes: 'tropa' i 'archer'
const archerDIV = document.createElement('div');

archerDIV.classList.add('tropa','archer')

const archerIMG = document.createElement('img');

const archerNOM = document.createElement('p');

const archerSTATS = document.createElement('p');

archerIMG.setAttribute('src','./img/archer.webp')
archerIMG.setAttribute('alt','Archer')

archerNOM.textContent = 'Archer'
archerNOM.style.fontWeight = 'Bold';


archerSTATS.textContent = '❤️ 40 • ⚔️ 12';
archerSTATS.style.fontWeight = 'Bold';

archerDIV.append(archerNOM,archerSTATS,archerIMG)

zonaAliada.append(archerDIV);

totalAliats ++;

comptadorAliats.textContent = totalAliats;



// ============================================
// TASCA 3 - TROPA ALIADA 3: GEGANT
// ============================================
// classes: 'tropa' i 'giant'
const giantDIV = document.createElement('div');

giantDIV.classList.add('tropa','giant')

const giantIMG = document.createElement('img');

const giantNOM = document.createElement('p');

const giantSTATS = document.createElement('p');

giantIMG.setAttribute('src','./img/giant.webp')
giantIMG.setAttribute('alt','Giant')

giantNOM.textContent = 'Giant'
giantNOM.style.fontWeight = 'Bold';


giantSTATS.textContent = '❤️ 380 • ⚔️ 25';
giantSTATS.style.fontWeight = 'Bold';

giantDIV.append(giantNOM,giantSTATS,giantIMG)

zonaAliada.append(giantDIV);

totalAliats ++;

comptadorAliats.textContent = totalAliats;



// ============================================
// ZONA ENEMIGA - GENERAR ENEMICS
// ============================================

// ============================================
// TASCA 4 - ENEMIC 1: GOBLIN
// ============================================
// classes: 'tropa' i 'goblin'
const goblinDIV = document.createElement('div');

goblinDIV.classList.add('tropa','goblin')

const goblinIMG = document.createElement('img');

const goblinNOM = document.createElement('p');

const goblinSTATS = document.createElement('p');

goblinIMG.setAttribute('src','./img/goblin.webp')
goblinIMG.setAttribute('alt','Goblin')

goblinNOM.textContent = 'Goblin'
goblinNOM.style.fontWeight = 'Bold';


goblinSTATS.textContent = '❤️ 32 • ⚔️ 19';
goblinSTATS.style.fontWeight = 'Bold';

goblinDIV.append(goblinNOM,goblinSTATS,goblinIMG)

zonaEnemiga.append(goblinDIV);

totalEnemics ++;

comptadorEnemics.textContent = totalEnemics;

// ============================================
// TASCA 5 - ENEMIC 2: ESQUELET
// ============================================
// classes: 'tropa' i 'skeleton'
const skeletonDIV = document.createElement('div');

skeletonDIV.classList.add('tropa','skeleton')

const skeletonIMG = document.createElement('img');

const skeletonNOM = document.createElement('p');

const skeletonSTATS = document.createElement('p');

skeletonIMG.setAttribute('src','./img/skeleton.webp')
skeletonIMG.setAttribute('alt','Skeleton')

skeletonNOM.textContent = 'Skeleton'
skeletonNOM.style.fontWeight = 'Bold';


skeletonSTATS.textContent = '❤️ 35 • ⚔️ 25';
skeletonSTATS.style.fontWeight = 'Bold';

skeletonDIV.append(skeletonNOM,skeletonSTATS,skeletonIMG)

zonaEnemiga.append(skeletonDIV);

totalEnemics ++;

comptadorEnemics.textContent = totalEnemics;


// ============================================
// TASCA 6 - ENEMIC 3: DRAC
// ============================================
// classes: 'tropa' i 'dragon'
const dragonDIV = document.createElement('div');

dragonDIV.classList.add('tropa','dragon')

const dragonIMG = document.createElement('img');

const dragonNOM = document.createElement('p');

const dragonSTATS = document.createElement('p');

dragonIMG.setAttribute('src','./img/dragon.webp')
dragonIMG.setAttribute('alt','dragon')

dragonNOM.textContent = 'Dragon'
dragonNOM.style.fontWeight = 'Bold';


dragonSTATS.textContent = '❤️ 1900 • ⚔️ 240';
dragonSTATS.style.fontWeight = 'Bold';

dragonDIV.append(dragonNOM,dragonSTATS,dragonIMG)

zonaEnemiga.append(dragonDIV);

totalEnemics ++;

comptadorEnemics.textContent = totalEnemics;

// ============================================
// TASCA 7 - ENEMIC 4: P.E.K.K.A
// ============================================
// classes: 'tropa' i 'pekka'
const pekkaDIV = document.createElement('div');

pekkaDIV.classList.add('tropa','pekka')

const pekkaIMG = document.createElement('img');

const pekkaNOM = document.createElement('p');

const pekkaSTATS = document.createElement('p');

pekkaIMG.setAttribute('src','./img/pekka.webp')
pekkaIMG.setAttribute('alt','pekka')

pekkaNOM.textContent = 'Pekka'
pekkaNOM.style.fontWeight = 'Bold';


pekkaSTATS.textContent = '❤️ 2900 • ⚔️ 510';
pekkaSTATS.style.fontWeight = 'Bold';

pekkaDIV.append(pekkaNOM,pekkaSTATS,pekkaIMG)

zonaEnemiga.append(pekkaDIV);

totalEnemics ++;

comptadorEnemics.textContent = totalEnemics;

// ============================================
// ACTUALITZAR COMPTADOR TOTAL
// ============================================

// TASCA 8: Actualitzar el comptador total de tropes
// Realitza la suma del número d'aliats + el número d'enemics
// Actualitza el comptador total amb textContent
comptadorTotal.textContent = totalEnemics + totalAliats;


// ============================================
// TASCA FINAL 1: Crear més tropes!
// ============================================
// Prova de crear més tropes per fer la batalla més gran:
//
// ALIATS:
// - Un segon Bàrbar
const barbar2DIV = document.createElement('div');
barbar2DIV.classList.add('tropa','barbarian')
const barbar2IMG = document.createElement('img');
const barbar2NOM = document.createElement('p');
const barbar2STATS = document.createElement('p');
barbar2IMG.setAttribute('src','./img/barbarian.webp')
barbar2IMG.setAttribute('alt','Barbars')
barbar2NOM.textContent = 'Barbar'
barbar2NOM.style.fontWeight = 'Bold';
barbar2STATS.textContent = '❤️ 78 • ⚔️ 16'
barbar2STATS.style.fontWeight = 'Bold';
barbar2DIV.append(barbar2NOM,barbar2STATS,barbar2IMG)
zonaAliada.append(barbar2DIV);
totalAliats ++;
comptadorAliats.textContent = totalAliats;

// - Un Rei Bàrbar (classes: 'tropa' i 'king-barbarian')
// - Un segon Gegant
//
// ENEMICS:
// - Un segon Goblin
const goblin2DIV = document.createElement('div');
goblin2DIV.classList.add('tropa','goblin')
const goblin2IMG = document.createElement('img');
const goblin2NOM = document.createElement('p');
const goblin2STATS = document.createElement('p');
goblin2IMG.setAttribute('src','./img/goblin.webp')
goblin2IMG.setAttribute('alt','Goblin')
goblin2NOM.textContent = 'Goblin'
goblin2NOM.style.fontWeight = 'Bold';
goblin2STATS.textContent = '❤️ 32 • ⚔️ 19';
goblin2STATS.style.fontWeight = 'Bold';
goblin2DIV.append(goblin2NOM,goblin2STATS,goblin2IMG)
zonaEnemiga.append(goblin2DIV);
totalEnemics ++;
comptadorEnemics.textContent = totalEnemics;

// - Un segon Drac
const dragon2DIV = document.createElement('div');
dragon2DIV.classList.add('tropa','dragon')
const dragon2IMG = document.createElement('img');
const dragon2NOM = document.createElement('p');
const dragon2STATS = document.createElement('p');
dragon2IMG.setAttribute('src','./img/dragon.webp')
dragon2IMG.setAttribute('alt','dragon')
dragon2NOM.textContent = 'Dragon'
dragon2NOM.style.fontWeight = 'Bold';
dragon2STATS.textContent = '❤️ 1900 • ⚔️ 240';
dragon2STATS.style.fontWeight = 'Bold';
dragon2DIV.append(dragon2NOM,dragon2STATS,dragon2IMG)
zonaEnemiga.append(dragon2DIV);
totalEnemics ++;
comptadorEnemics.textContent = totalEnemics;
// - Un segon Esquelet
const skeleton2DIV = document.createElement('div');
skeleton2DIV.classList.add('tropa','skeleton')
const skeleton2IMG = document.createElement('img');
const skeleton2NOM = document.createElement('p');
const skeleton2STATS = document.createElement('p');
skeleton2IMG.setAttribute('src','./img/skeleton.webp')
skeleton2IMG.setAttribute('alt','Skeleton')
skeleton2NOM.textContent = 'Skeleton'
skeleton2NOM.style.fontWeight = 'Bold';
skeleton2STATS.textContent = '❤️ 35 • ⚔️ 25';
skeleton2STATS.style.fontWeight = 'Bold';
skeleton2DIV.append(skeleton2NOM,skeleton2STATS,skeleton2IMG)
zonaEnemiga.append(skeleton2DIV);
totalEnemics ++;
comptadorEnemics.textContent = totalEnemics;

//
// Recorda actualitzar els comptadors cada vegada!

// ============================================
// TASCA FINAL 2: Eliminar tropes del camp
// ============================================
// Simula que una tropa ha estat derrotada!
// Recorda actualitzar els comptadors després d'eliminar una tropa.
//
// Prova d'eliminar:
// - El primer Bàrbar (aliat derrotat)
// - El primer Goblin (enemic derrotat)

// ============================================
// TASCA FINAL 3: Eliminar els missatges "empty"
// ============================================
// Quan ja tens tropes al camp, els missatges "No tens tropes" i "Encara no hi ha enemics" s'han d'eliminar.
//
// Selecciona'ls i elimina'ls (.empty-message')
