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
const rank = document.querySelector('#ranking');

// TASCA 2: Crear la llista de jugadors amb innerHTML
// ------------------------------------------------
// EXEMPLE d'un element (li):
//   <li>
//     <span class="posicio">...</span>
//     <span class="jugador-nom">...</span>
//     <span class="punts">...</span>
//   </li>
//

console.log(rank.innerHTML);

rank.innerHTML = `
<ul>
  <li>
    <span class="posicio">1</span>
    <span class="jugador-nom">Victor</span>
    <span class="punts">50</span>
  </li>

  <li>
    <span class="posicio">2</span>
    <span class="jugador-nom">Miquel</span>
    <span class="punts">35</span>
  </li>

  <li>
    <span class="posicio">3</span>
    <span class="jugador-nom">Juan</span>
    <span class="punts">30</span>
  </li>

  <li>
    <span class="posicio">4</span>
    <span class="jugador-nom">Pepe</span>
    <span class="punts">15</span>
  </li>

  <li>
    <span class="posicio">5</span>
    <span class="jugador-nom">Xavi</span>
    <span class="punts">10</span>
  </li>

  <li>
    <span class="posicio">6</span>
    <span class="jugador-nom">Ferran</span>
    <span class="punts">5</span>
  </li>
</ul>
`;

// TASCA 3: Afegir un 4t jugador amb el TEU nom
