let lletres = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let nuemros = ['0','1','2','3','4','5','6','7','8','9']
let especials = ['!','@','#','$','%','^','&','*','(',')','_','+']

let numLletres = 8;
let numNumeros = 4;
let numEspecials= 2;

const resultat = document.querySelector('#resultat')

let contrasenyafinal = 9


function generadorcontra() {
    for (let i = 0; i < numLletres; i++) {
    console.log(Math.floor(Math.random() * (lletres.length)));
    }
    
    for (let i = 0; i < numNumeros; i++) {
    console.log(Math.floor(Math.random() * (nuemros.length)));
    }

    for (let i = 0; i < numEspecials; i++) {
    console.log(Math.floor(Math.random() * (especials.length)));
    }

}

generadorcontra();

resultat.textContent = (contrasenyafinal);