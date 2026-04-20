let numCaixes = 6
let posicio = 0
const botocaixa = document.querySelector('#generar-caixes');
const contenidor = document.querySelector('#contenidor');



botocaixa.addEventListener('click', () => {
    for (let i = 0; i < numCaixes; i++) {
    posicio = posicio +1
    const div = document.createElement('div');
    div.textContent = (`Caixa ${i + 1}`);
    div.classList.add('caixa');
    contenidor.append(div);
    if (posicio % 2 === 0) {
        div.classList.add('parell')
    } else {
        div.classList.add('imparell')
    }
}})
;



