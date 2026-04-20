// ============================================
// EXERCICI 6: GALERIA DE PERSONATGES
// ============================================
// OBJECTIU: Practicar setAttribute() i removeAttribute()
//
// CONCEPTES QUE NECESSITARÀS:
// - document.querySelector() --> per seleccionar elements
// - .setAttribute('atribut', 'valor') --> per AFEGIR/MODIFICAR atributs
// - .removeAttribute('atribut') --> per ELIMINAR atributs
//
// ATRIBUTS HTML PRINCIPALS:
// - src: ruta de la imatge
// - alt: text alternatiu (accessibilitat)
// - title: text que apareix al passar el ratolí
// - disabled: desactiva un botó/input
//
// ============================================

// ============================================
// TASCA 1: LINK (The Legend of Zelda)
// ============================================

// PUNT 1: Seleccionar la imatge de Link
const imglink = document.querySelector('#link-img');
// PUNT 2: Canviar la imatge a la versió amb Master Sword
imglink.setAttribute('src','./img/link-master-sword.webp');
// PUNT 3: Actualitzar l'atribut alt per 'Link amb Master Sword'
imglink.setAttribute('alt','Link amb Master Sword');

// PUNT 4: Actualitzar l'atribut title per 'Link - Heroi amb Master Sword'
imglink.setAttribute('title','Link - Heroi amb Master Sword');

// PUNT 5: Canvia els noms del personatge (h3) amb textContent i afegeix (Powered Up!)
const nomlink = document.querySelector('#link-nom');
nomlink.textContent = 'Link: (Powered Up!)'
// PUNT 6: Canvia el text de Mode: Normal a Mode: Master Sword
const estalink = document.querySelector('.estat');
estalink.textContent = 'Mode: Master Sword'

// PUNT 7: Activar el botó de transformació (seleccionar el botó i eliminar atribut disabled)
const botolink = document.querySelector('#btn-link')
botolink.removeAttribute('disabled')
// ============================================
// TASCA 2: MARIO (Super Mario Bros)
// ============================================

// PUNT 1: Seleccionar la imatge de Mario
const imgmario = document.querySelector('#mario-img');

// PUNT 2: Canviar la imatge a la versió Fire Mario
imgmario.setAttribute('src','./img/mario-power.webp');

// PUNT 3: Actualitzar l'atribut alt per 'Mario - Fire Mario'
imgmario.setAttribute('alt','Mario - Fire Mario');

// PUNT 4: Actualitzar l'atribut title per 'Mario - Fire Mario'
imgmario.setAttribute('title','Mario - Fire Mario');

// PUNT 5: Canvia el nom del personatge (h3) amb textContent i afegeix (Powered Up!)
const nommario = document.querySelector('#mario-nom');
nommario.textContent = 'Mario: (Powered Up!)'

// PUNT 6: Canvia el text de Mode: Normal a Mode: Fire Mario
const estamario = document.querySelector('.estat-mario');
estamario.textContent = 'Mode: Fire Mario'

// PUNT 7: Activar el botó del Mario
const botomario = document.querySelector('#btn-mario')
botomario.removeAttribute('disabled')

// ============================================
// TASCA 3: SONIC (Sonic the Hedgehog)
// ============================================

// PUNT 1: Seleccionar la imatge del Sonic
const sonicIMG = document.querySelector('#sonic-img')

// PUNT 2: Canviar la imatge a la versió Super Sonic
sonicIMG.setAttribute('src','./img/sonic-super.webp')

// PUNT 3: Actualitzar l'atribut alt per 'Super Sonic daurat'
sonicIMG.setAttribute('alt','Super Sonic daurat')

// PUNT 4: Actualitzar l'atribut title per 'Sonic - Super Sonic (forma daurada)'
sonicIMG.setAttribute('title','Super Sonic ')

// PUNT 5: Canvia el nom del personatge (h3) amb textContent i afegeix (Powered Up!)
const sonicNOM = document.querySelector('#sonic-nom')
sonicNOM.textContent = ('Sonic (Powered Up!)')

// PUNT 6: Canvia el text de Mode: Normal a Mode: Super Sonic
const sonicESTAT = document.querySelector('.estat-sonic')
sonicESTAT.textContent = ('Mode: Super Sonic')

// PUNT 7: Activar el botó de Sonic
const sonicBoto = document.querySelector('#btn-sonic')
sonicBoto.removeAttribute('disabled')