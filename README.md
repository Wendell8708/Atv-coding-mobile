🐉 Dragon Ball Z – PWA

Aplicação desenvolvida para praticar o consumo de APIs com JavaScript, além de explorar recursos modernos do navegador como câmera, geolocalização e Progressive Web App (PWA).

O usuário pode tirar uma foto utilizando a câmera do dispositivo, simulando um medidor de ki do universo Dragon Ball Z, que realiza uma análise fictícia do KI e retorna um personagem compatível com o nível detectado.

Também é possível calcular a distância da localização atual do usuário até a Kame House, residência do Mestre Kame (também fictícia).

📱 Acesse a aplicação

🔗 atv-coding-pwa-wendelljr.netlify.app

A aplicação pode ser instalada no celular ou desktop como um app nativo.

🖼️ Preview
<img width="1339" height="634" alt="image" src="https://github.com/user-attachments/assets/64ef9a9b-a3c7-4805-8125-78398ec0e871" /> <img width="1102" height="586" alt="image" src="https://github.com/user-attachments/assets/3c639322-e861-4052-a05e-fcd18ce0460b" />
🚀 Tecnologias utilizadas
HTML5
CSS3
JavaScript
Fetch API
MediaDevices API (Câmera)
Geolocation API
Service Worker
Web App Manifest (PWA)
⚙️ Funcionalidades
📷 Integração com Câmera

Uso da MediaDevices API para acessar a câmera do dispositivo, permitindo capturar uma imagem e simular a leitura do nível de poder (KI), semelhante ao Scouter do anime.

🌍 Geolocalização Estilizada

Utilização da Geolocation API para obter a localização atual do usuário e calcular a distância até a famosa Kame House.

🔌 Consumo de API Externa

Integração assíncrona utilizando fetch para consumir dados da API pública de Dragon Ball, obtendo:

Nome do personagem
Imagem
Nível de poder (KI)
🧠 Lógica de Análise de Poder

Algoritmo que:

Obtém personagens da API
Ordena os níveis de poder
Seleciona um personagem compatível com o KI detectado
Exibe o resultado na tela
📲 Progressive Web App (PWA)

A aplicação pode ser instalada no dispositivo como um app.

Recursos implementados:

Manifesto configurado
Ícones personalizados
Tema de cores
Modo standalone (sem barra do navegador)
Atalho rápido para abrir a câmera
Funcionamento offline básico via Service Worker
