// ============================================
// ⚔️ EXERCICI 2: CALCULADORA DE COMBAT
// ============================================
// 🎯 OBJECTIU: Treballar els operadors aritmètics, relacionals i lògics amb el DOM
//
// 📚 CONCEPTES:
// - Variables i constants
// - Operadors aritmètics: +, -, *, /
// - Operadors relacionals: >, <, >=, <=
// - Operadors lògics: &&, ||
// - Math.floor(), Math.ceil()
// - Math.min(), Math.max()
// - Manipulació del DOM
//
// ============================================

// ============================================
// PART 1: ESTADÍSTIQUES DELS COMBATENTS
// ============================================

// ============================================
// ✅ TASCA 1: Establir stats del jugador
// ============================================
// Mewtwo - Nivell 50

const nomJugador = 'Mewtwo';
const atacJugador = 130;
const defensaJugador = 70;
const velocitatJugador = 140;
const vidaMaximaJugador = 200;
let vidaActualJugador = 200;
let percentatgeVidaJugador = (vidaActualJugador / vidaMaximaJugador) * 100;

// ============================================
// ✅ TASCA 2: Establir stats de l'enemic
// ============================================
// Charizard - Nivell 50

const nomEnemic = 'Charizard';
const atacEnemic = 120;
const defensaEnemic = 65;
const velocitatEnemic = 95;
const vidaMaximaEnemic = 180;
let vidaActualEnemic = 180;
let percentatgeVidaEnemic = (vidaActualEnemic / vidaMaximaEnemic) * 100;

// ============================================
// ✅ TASCA 3: Actualitzar stats al DOM
// ============================================
// Selecciona tots els elements dels stats del Jugador i actualitza'ls amb textContent
// Selecciona tots els elements dels stats de l'Enemic i actualitza'ls amb textContent

const spanAtacJugador = document.querySelector('#atac-jugador');
const spanDefensaJugador = document.querySelector('#defensa-jugador');
const spanVelocitatJugador = document.querySelector('#velocitat-jugador');
const spanVidaJugador = document.querySelector('#vida-jugador-text');
const divBarraVidaJugador = document.querySelector('#barra-vida-jugador');

const spanAtacEnemic = document.querySelector('#atac-enemic');
const spanDefensaEnemic = document.querySelector('#defensa-enemic');
const spanVelocitatEnemic = document.querySelector('#velocitat-enemic');
const spanVidaEnemic = document.querySelector('#vida-enemic-text');
const divBarraVidaEnemic = document.querySelector('#barra-vida-enemic');

spanAtacJugador.textContent = atacJugador;
spanDefensaJugador.textContent = defensaJugador;
spanVelocitatJugador.textContent = velocitatJugador;
spanVidaJugador.textContent = vidaActualJugador + '/' + vidaMaximaJugador;
divBarraVidaJugador.style.width = percentatgeVidaJugador + '%';

spanAtacEnemic.textContent = atacEnemic;
spanDefensaEnemic.textContent = defensaEnemic;
spanVelocitatEnemic.textContent = velocitatEnemic;
spanVidaEnemic.textContent = vidaActualEnemic + '/' + vidaMaximaEnemic;
divBarraVidaEnemic.style.width = percentatgeVidaEnemic + '%';

// ============================================
// PART 2: CÀLCULS DE DANY (SIMULANT 1 TORN DE COMBAT)
// ============================================

// ============================================
// ✅ TASCA 4: Calcular dany normal del jugador
// ============================================
// Fórmula: Atac del jugador - Defensa de l'enemic
// Si el resultat és negatiu o 0, el dany ha de ser igual a 1

let danyJugadorNormal = ;



// ============================================
// ✅ TASCA 5: Calcular el dany d'un atac crític del jugador (x2)
// ============================================
// Fórmula: Dany normal del jugador * 2

let danyJugadorCritic;

// ============================================
// ✅ TASCA 6: Calcular dany normal de l'enemic
// ============================================
// Fórmula: Atac de l'enemic - Defensa del jugador
// Si el resultat és negatiu o 0, el dany ha de ser igual a 1

let danyEnemicNormal;

// ============================================
// ✅ TASCA 7: Calcular el dany d'un atac crític de l'enemic (x2)
// ============================================
// Fórmula: Dany normal de l'enemic * 2

let danyEnemicCritic;

// ============================================
// ✅ TASCA 8: Actualitzar dany al DOM
// ============================================
// Selecciona els elements del dany normal i crític del jugador i l'enemic
// Actualitza els valors de dany normal i crític del jugador i l'enemic al DOM

const divDanyJugadorNormal = ;
const divDanyJugadorCritic = ;
const divDanyEnemicNormal = ; 
const divDanyEnemicCritic = ;

// ============================================
// PART 3: PROBABILITATS
// ============================================

// ============================================
// ✅ TASCA 9: Calcular les probabilitats d'un atac crític (% de fer un atac crític)
// ============================================
// Fórmula Jugador: Velocitat Jugador / 5 (i com a màxim 30%)
// Fórmula Enemic: Velocitat Enemic / 5 (i com a màxim 30%)
// Selecciona els elements de probabilitat d'atac crític del jugador i l'enemic
// Actualitza el DOM amb el percentatge de probabilitat d'atac crític
let probCriticJugador;
let probCriticEnemic;

const divProbCriticJugador;
const divProbCriticEnemic;

// ============================================
// ✅ TASCA 10: Calcular les probabilitats d'esquivar l'atac (% de poder esquivar un atac)
// ============================================
// Fórmula Jugador: Velocitat Jugador / 6 (i com a màxim un 20%)
// Fórmula Enemic: Velocitat Enemic / 6 (i com a màxim un 20%)
// Selecciona els elements de probabilitat d' esquivar del jugador i l'enemic
// Actualitza el DOM amb el percentatge de probabilitat d'esquivar l'atac

let probEsquivaJugador;
let probEsquivaEnemic;

const divProbEsquivaJugador;
const divProbEsquivaEnemic;

// ============================================
// PART 4: PREDICCIONS
// ============================================

// ============================================
// ✅ TASCA 11: Determinar qui ataca primer
// ============================================
// El personatge amb més velocitat ataca primer
// Selecciona l'element del DOM que mostrarà qui ataca primer
// Actualitza el DOM amb el nom del personatge que ataca primer

let quiAtacaPrimer;

const divQuiPrimer;

// ============================================
// ✅ TASCA 12: Calcular els possibles torns necessaris per guanyar
// ============================================
// Divideix la vida de l'enemic pel dany normal del jugador
// Arrodoneix cap AMUNT (no pots fer mig torn!)
// Selecciona l'element del DOM que mostrarà els torns necessaris per guanyar
// Actualitza el DOM amb els torns necessaris per guanyar

let tornsNecessarisJugador;

const divTornsGuanyar;

// ============================================
// ✅ TASCA 13: Calcular vida restant del Jugador després del combat (sense crítics ni atacs esquivats)
// ============================================
// Calcula la quantitat de dany que rebràs després de fer tots els torns
// El dany total rebut serà: dany normal de l'enemic * torns necessaris del jugador
// La vida restant serà: vida màxima del jugador - dany total rebut
// Selecciona l'element del DOM que mostrarà la vida restant del jugador
// Actualitza el DOM amb la vida restant (si el valor és negatiu, has de mostrar 0)

let danyTotalRebut;
let vidaRestant;

const divVidaRestant;

// ============================================
// TASCA 14: Calcular probabilitat de victòria després de la predicció anterior de vida restant
// ============================================
// Basant-te en la vida restant a partir de la predicció anterior:
// - Si vidaRestant >= 75% → 100%
// - Sinó, Si vidaRestant >= 50% → 75%
// - Sinó, Si vidaRestant >= 25% → 55%
// - Sinó  → 10%
// Selecciona l'element del DOM que mostrarà la probabilitat de victòria
// Actualitza el DOM amb la probabilitat de victòria

let probVictoria = 0;

// ============================================
// PART 5: SIMULACIÓ D'UN TORN
// ============================================

// TASCA GRUPAL: SIMULAR UN TORN DE COMBAT
// ============================================
// Simula un torn de combat on ataqui el personatge que toca segons la velocitat
// Has de tenir en compte les probabilitats d'atac crític i d'esquivar l'atac
// Actualitza la vida dels personatges després de cada atac
// Mostra al log del combat cada acció que es realitza (qui ataca, si és crític o normal, si s'esquiva, vida restant, etc.)
