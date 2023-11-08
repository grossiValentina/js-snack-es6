const bici =[
    {
        nome: "prima bici",
        peso: 5
    },
    {
        nome: "seconda bici",
        peso: 4
    },
    {
        nome: "terza bici",
        peso: 3
    },
    {
        nome: "quarta bici",
        peso: 6
    },
    {
        nome: "quinta bici",
        peso: 2
    },
]


let pesoMinimo = bici[0].peso;

bici.forEach((biciElem) => {
    const {nome, peso} = biciElem;
    console.log(nome, peso);

    if(peso < pesoMinimo){
        pesoMinimo = peso;
    }
});

const messaggio = "la bicicletta più leggera ha un peso di kg:"

console.log(messaggio, pesoMinimo)







