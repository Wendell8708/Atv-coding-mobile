let streamCamera;

// Ativar a câmera
async function iniciarCamera() {
    try {
        streamCamera = await navigator.mediaDevices.getUserMedia({
            video: true
        });

        const video = document.getElementById("camera");
        video.srcObject = streamCamera;
        video.style.display = "block";

        document.getElementById("btnFoto").style.display = "inline-block";
    } catch (err) {
        alert("Permita o acesso à câmera para continuar.");
        console.error("Erro ao acessar a câmera:", err);
    }
}

// Tirar foto e desligar a câmera
function tirarFoto() {
    const video = document.getElementById("camera");
    const canvas = document.getElementById("foto");
    const ctx = canvas.getContext("2d");

    // Ajusta o canvas ao tamanho do vídeo
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Desenha a imagem no canvas
    ctx.drawImage(video, 0, 0);

    // Desliga todos os tracks da câmera
    if (streamCamera) {
        streamCamera.getTracks().forEach(track => track.stop());
    }

    // Gerenciamento de exibição dos elementos
    video.style.display = "none";
    document.getElementById("btnFoto").style.display = "none";
    document.getElementById("btnAnalise").style.display = "inline-block";
    document.getElementById("status").innerHTML = "Foto capturada ✔";
}

// Delay de 2 segundos e mostrar personagem
function analisarKI() {
    document.getElementById("status").innerHTML = "<h3>Analisando KI...</h3>";

    setTimeout(() => {
        getPersonagem();
    }, 2000);
}

// Buscar personagens na API de Dragon Ball
async function getPersonagem() {
    try {
        let response = await fetch("https://dragonball-api.com/api/characters?limit=58");
        let data = await response.json();
        let personagens = data.items;

        // Ordena por KI (do menor para o maior)
        let ordenados = personagens.sort((a, b) => Number(a.ki) - Number(b.ki));

        // Seleção aleatória de um índice base
        let indexBase = Math.floor(Math.random() * (ordenados.length - 2));

        let p1 = ordenados[indexBase];
        let p2 = ordenados[indexBase + 1] || p1;
        let p3 = ordenados[indexBase + 2] || p2;

        document.getElementById("status").innerHTML = "<h2>Resultado da análise</h2>";

        document.getElementById("personagem").innerHTML = `
            <div class="card">
                <h2>${p1.name}</h2>
                <img src="${p1.image}" alt="${p1.name}" style="width:150px">
                <p>Seu KI detectado</p>
                <p><strong>${p1.ki}</strong></p>
            </div>

            <div class="card destaque">
                <h2>${p2.name}</h2>
                <img src="${p2.image}" alt="${p2.name}" style="width:150px">
                <p>Possivel KI superior detectado</p>
                <p><strong>${p2.ki}</strong></p>
            </div>

            <div class="card super">
                <h2>${p3.name}</h2>
                <img src="${p3.image}" alt="${p3.name}" style="width:150px">
                <p>Outro KI detectado próximo a você.</p>
                <p><strong>${p3.ki}</strong></p>
            </div>
        `;
    } catch (error) {
        console.error("Erro ao buscar personagens:", error);
        document.getElementById("status").innerHTML = "Erro ao carregar os dados do KI.";
    }
}

// Distância fictícia até a Kame House
function getDistanciaKame() {
    if (!navigator.geolocation) {
        alert("Geolocalização não suportada pelo seu navegador");
        return;
    }

    navigator.geolocation.getCurrentPosition(() => {
        let distanciaFake = Math.floor(Math.random() * 20000) + 30000;
        document.getElementById("distancia").innerHTML = 
            `Você está a <strong>${distanciaFake.toLocaleString()} km</strong> da Kame House`;
    }, (err) => {
        alert("Erro ao obter localização. O Mestre Kami está escondendo o KI!");
    });
}