async function getPersonagem(){

    let response = await fetch("https://dragonball-api.com/api/characters?limit=58");
    let data = await response.json();

    console.log("Objeto inteiro");
    console.log(data);

    console.log("Lista de personagens");
    let personagens = data.items;
    console.log(personagens);

    // sorteando um numero pra escolher um personagem aleatorio
    let numeroAleatorio = Math.floor(Math.random() * personagens.length);
    let personagem = personagens[numeroAleatorio];

    console.log("Personagem sorteado");
    console.log(personagem);

    document.getElementById("personagem").innerHTML = `
    
    <h2>${personagem.name}</h2>
    <img src="${personagem.image}">
    
    `

}