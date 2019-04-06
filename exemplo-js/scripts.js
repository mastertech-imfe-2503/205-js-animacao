const escada = document.querySelector('.escada');
const inputValor = document.querySelector('input[type=number]');
const botaoDesenhar = document.querySelector('button');

// for (let i = 0; i < 5; i++) {
    // escada.innerHTML = escada.innerHTML + i;
    // escada.innerHTML += '<p>' + i + '</p>';

    //TEMPLATE STRING
    // escada.innerHTML += `<p>${i}</p>`;
// }

// PRIMEIRA IDEIA DE SOLUÇÃO
// let listaDeDegraus = ['*', '**', '***', '****', '*****'];

// for (let i = 0; i < listaDeDegraus.length; i ++) {
//     escada.innerHTML += `<p>${listaDeDegraus[i]}</p>`;
// }

// SEGUNDA IDEIA DE SOLUÇÃO
// for (let i = 1; i <= 5; i++) {
//     let degrau = '';

//     for(let j = 0; j < i; j++) {
//         degrau += '*';
//     }

//     escada.innerHTML += `<p>${degrau}</p>`
// }

//TERCEIRA IDEIA DE SOLUÇÃO
function desenharEscada() {
    let degrau = '*';
    let limite = Number(inputValor.value);
    
    escada.innerHTML = '';

    for (let i = 0; i < limite; i ++) {
        escada.innerHTML += `<p>${degrau}</p>`;
    
        degrau += '*';
    }
}

botaoDesenhar.onclick = desenharEscada;