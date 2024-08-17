const rollDice = (numero) => {
    const resultado = Math.floor(Math.random() * numero) + 1;
    console.log(resultado);
}

rollDice(50)