function processarFormulario(){
    let nome = document.querySelector("#nome").value.trim()
    let email = document.querySelector("#email").value.trim()
    let telefone = document.querySelector("#telefone").value.trim()
    let instagram = document.querySelector("#instagram").value.trim()

    if(nome === ""){
        alert("Você deve informar seu nome")
        return false
    }

    if(email === ""){
        alert("Você deve informar seu email")
        return false
    }

    if(!email.includes("@gmail.com") && !email.includes("@hotmail.com") && !email.includes("@yahoo.com") && !email.includes("@outlook.com")){
        alert("Você deve inserir um email válido")
        return false
    } 
    
    if(telefone === ""){
        alert("Você deve informar seu telefone")
        return false
    }

    if(instagram === ""){
        alert("Você deve informar seu instagram")
        return false
    }
}

function togglePlayPause(video) {
        if (video.paused) {
            video.play(); // Dá play no vídeo
        } else {
            video.pause(); // Pausa o vídeo
        }
    }

    // Pause de outros áudios quando um novo é iniciado

    document.addEventListener("play", function (event) {
        const mediaPlayers = document.querySelectorAll(".media-player");

        mediaPlayers.forEach((player) => {
            // Ignora o vídeo de fundo e o player que disparou o evento
            if (player !== event.target && !player.paused && !event.target.classList.contains("background-video")) {
                player.pause(); // Pausa todos os outros players que estão tocando
            }
        });
    }, true);

//ALBUM VAI

const playlist = [
    './capasAlbuns/Tropicalismo_Shakesperiano.mp3',
    './capasAlbuns/Frequência_Anomalia.mp3'
];
let currentTrack = 0;
const audioPlayer = document.getElementById('audioPlayer');
const nextBtn = document.getElementById('nextBtn');

function playTrack(index) {
    if (playlist[index]) {
        audioPlayer.src = playlist[index];
        audioPlayer.play();
        currentTrack = index;
    }
}

audioPlayer.addEventListener('ended', function() {
    if (currentTrack < playlist.length - 1) {
        playTrack(currentTrack + 1);
    }
});

nextBtn.addEventListener('click', function() {
    if (currentTrack < playlist.length - 1) {
        playTrack(currentTrack + 1);
    }
});

audioPlayer.src = playlist[0];

//ALBUM VOLTA

const prevBtn = document.getElementById('prevBtn');

prevBtn.addEventListener('click', function() {
    if (currentTrack > 0) {
        playTrack(currentTrack - 1);
    }
});