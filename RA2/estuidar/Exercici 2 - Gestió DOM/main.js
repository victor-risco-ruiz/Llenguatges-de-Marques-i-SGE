// Ex01
const canviar = document.querySelector('#missatge');
canviar.textContent = "Has desbloquejat un nou nivell!";

// Ex02
const canviarclas = document.querySelectorAll('.enemics');
for (let i = 0; i < canviarclas.length; i++) {
    canviarclas[i].style.color = 'red';
}

// Ex03
const llista = document.querySelector('#llista-jocs');
llista.innerHTML = `
<ol>
  <li>The Legend of Zelda</li>
  <li>Dark Souls</li>
  <li>Minecraft</li>
</ol>
`;

// Ex04
//const imatge = document.querySelector('#foto');
//imatge.setAttribute('alt','Hola')

// Ex05
const clickar = document.querySelector('#boto-ex05');
clickar.addEventListener('click', () => {
console.log('Has clicat!');
});


// Ex06
const boto6 = document.querySelector('#boto-ex06');
const comp = document.querySelector('#comptador');
let conts = 0;

boto6.addEventListener('click', () => {
    conts++;
    comp.textContent = conts;
});

// Ex07
const boto = document.querySelector('#boto-ex07');
const imatge = document.querySelector('#imatge-ex07');

//boto.addEventListener('click', () => {
//imatge.setAttribute('src','imatge2.webp');
//});


// Ex08
const quadrat = document.querySelector('#quadrat');

quadrat.addEventListener('mouseover', () => {
quadrat.style.setProperty('background','yellow');
});

quadrat.addEventListener('mouseout', () => {
quadrat.style.setProperty('background','blue');
});


// Ex09
document.addEventListener('keydown', event => {
console.log('Has premut:', event.key);
});


// Ex10
const ex10 = document.querySelector('#boto-ex10');
ex10.addEventListener('click', () => {
    ex10.setAttribute('disabled', true);
});

// Ex11
const ex11 = document.querySelector('#text-ex11');
const botoex11 = document.querySelector('#boto-ex11');

botoex11.addEventListener('click', () => {
    ex11.classList.add('destacat');
});

// Ex12
const botoex12 = document.querySelector('#boto-ex12');
const ex12 = document.querySelector('#paragraf-ex12');

botoex12.addEventListener('click', () => {
    ex12.classList.remove('destacat');
});


// Ex13
const boto13 = document.querySelector('#boto-ex13');
const pantalla = document.querySelector('#pantalla');

boto13.addEventListener('click', () => {
    const p = document.createElement('p');
    p.textContent = 'Nou enemic';

    pantalla.append(p);
});