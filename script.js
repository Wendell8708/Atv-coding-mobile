async function getPersonagem(){

    let response = await fetch("https://dragonball-api.com/api/characters?limit=58");
    let data = await response.json();

    let personagens = data.items;

    // 1º personagem aleatório
    let numeroAleatorio = Math.floor(Math.random() * personagens.length);
    let p1 = personagens[numeroAleatorio];

    // 2º personagem com KI maior que o primeiro
    let maisFortes1 = personagens.filter(p =>
        Number(p.ki) > Number(p1.ki) && p.id !== p1.id
    );

    let p2;

    if(maisFortes1.length > 0){

        let numeroAleatorio2 = Math.floor(Math.random() * maisFortes1.length);
        p2 = maisFortes1[numeroAleatorio2];

    }else{

        let outros = personagens.filter(p => p.id !== p1.id);
        let numeroAleatorio2 = Math.floor(Math.random() * outros.length);
        p2 = outros[numeroAleatorio2];

    }


    // 3º personagem com KI maior que o segundo
    let maisFortes2 = personagens.filter(p =>
        Number(p.ki) > Number(p2.ki) && p.id !== p2.id && p.id !== p1.id
    );

    let p3;

    if(maisFortes2.length > 0){

        let numeroAleatorio3 = Math.floor(Math.random() * maisFortes2.length);
        p3 = maisFortes2[numeroAleatorio3];

    }else{

        let outros = personagens.filter(p =>
            p.id !== p1.id && p.id !== p2.id
        );

        let numeroAleatorio3 = Math.floor(Math.random() * outros.length);
        p3 = outros[numeroAleatorio3];

    }


    document.getElementById("personagem").innerHTML = `

    <div class="card">
        <h2>${p1.name}</h2>
        <img src="${p1.image}">
        <p>KI: ${p1.ki}</p>
    </div>

    <div class="card destaque">
        <h2>${p2.name}</h2>
        <img src="${p2.image}">
        <p>KI: ${p2.ki}</p>
    </div>

    <div class="card super">
        <h2>${p3.name}</h2>
        <img src="${p3.image}">
        <p>KI: ${p3.ki}</p>
    </div>

    `;

}