let lletres = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let numeros = ['0','1','2','3','4','5','6','7','8','9']
let especials = ['!','@','#','$','%','^','&','*','(',')','_','+']

let numLletres = 8;
let numNumeros = 4;
let numEspecials= 2;




function generadorcontra() {
    let contrasenyafinal = ""

    for (let i = 0; i < numLletres; i++) {
        contrasenyafinal += lletres[Math.floor(Math.random() * lletres.length)];
    }
    
    for (let i = 0; i < numNumeros; i++) {
        contrasenyafinal += numeros[Math.floor(Math.random() * numeros.length)];
    }

    for (let i = 0; i < numEspecials; i++) {
        contrasenyafinal += especials[Math.floor(Math.random() * especials.length)];
    }
    const resultat = document.querySelector('#resultat')
    resultat.textContent = contrasenyafinal;
}

generadorcontra();

