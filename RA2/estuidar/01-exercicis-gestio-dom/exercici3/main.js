// ============================================
// EXERCICI 3: TAULA DE CLASSIFICACIÓ
// ============================================
// OBJECTIU: Practicar innerHTML per crear llistes HTML
//
// CONCEPTES QUE NECESSITARÀS:
// - document.querySelector() --> per seleccionar elements
// - .innerHTML --> per inserir codi HTML dins un element
//
// ============================================

// TASCA 1: Seleccionar el div #ranking
// ------------------------------------------------
const rankindiv = document.querySelector('#ranking');

// TASCA 2: Crear la llista de jugadors amb innerHTML
// ------------------------------------------------
// EXEMPLE d'un element (li):
//   <li>
//     <span class="posicio">...</span>
//     <span class="jugador-nom">...</span>
//     <span class="punts">...</span>
//   </li>
//

rankindiv.innerHTML = `
<ul>
    <li>
    <span class="posicio">1</span>
    <span class="jugador-nom">Victor</span>
    <span class="punts">10</span>
    </li>
    <li>
    <span class="posicio">2</span>
    <span class="jugador-nom">Risco</span>
    <span class="punts">8</span>
    </li>
    <li>
    <span class="posicio">3</span>
    <span class="jugador-nom">Ruiz</span>
    <span class="punts">7</span>
    </li>
    <li>
    <span class="posicio">4</span>
    <span class="jugador-nom">V</span>
    <span class="punts">5</span>
    </li>
</ul>
`

// TASCA 3: Afegir un 4t jugador amb el TEU nom
