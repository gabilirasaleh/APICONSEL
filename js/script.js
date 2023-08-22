function chamapi() {
    let numb = document.getElementById("number").value

    fetch('https://api.adviceslip.com/advice/' + numb)
        .then(data => {
            return data.json();
        })
        .then(data => {
            console.log(data.slip.advice);
            let fra = document.getElementById("frase");
            fra.innerHTML = data.slip.advice;
        })
}

function randomgenerator() {
    function gerarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    var numeroAleatorio = gerarNumeroAleatorio(1, 224);
    fetch('https://api.adviceslip.com/advice/' + numeroAleatorio)
    .then(data => {
        return data.json();
    })
    .then(data => {
        console.log(data.slip.advice);
        let fra = document.getElementById("frase");
        fra.innerHTML = data.slip.advice;
    })
}
