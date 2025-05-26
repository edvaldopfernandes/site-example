let imagens = ["img/img1.jpeg", "img/img2.jpeg", "img/img3.jpeg"];
let index = 0;

function trocarImagem() {
  index = (index + 1) % imagens.length;
  document.getElementById("slide").src = imagens[index];
}

setInterval(trocarImagem, 3000); // troca a cada 3 segundos
