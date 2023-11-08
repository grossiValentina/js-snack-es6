const squadre = [
    {
        nome: "squadra 1",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "squadra 2",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "squadra 3",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome:  "squadra 4",
        puntiFatti:  0,
        falliSubiti: 0
    },
    {
        nome: "squadra 5",
        puntiFatti: 0,
        falliSubiti: 0
    },
];








// funzione inserimento numeri random
    
    function inserimentoValori(squadre) {
        squadre.forEach((curSquadra) => {
            curSquadra.puntiFatti = puntiRandom();
            curSquadra.falliSubiti = falliRandom();
        });
        
    }
    
    

// funzione per numero falli random 
function falliRandom() {
    const numeroRandom = Math.floor(Math.random() * 50);
    console.log(numeroRandom)

    return numeroRandom;
}


// funzione per numero punti random 
function puntiRandom() {
    const numeroRandom = Math.floor(Math.random() * 20);
    console.log(numeroRandom)

    return numeroRandom;

}





