//Comandos Troca de Tema//
const btnTema = document.querySelector("#btn-tema");
const body = document.body;

// Quando a página carregar, verifica se já existe tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
    body.classList.add("dark-theme");
    btnTema.textContent = "☀️ Tema Claro";
} else {
    btnTema.textContent = "🌙 Tema Escuro";
}

// Evento de clique no botão
btnTema.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        btnTema.textContent = "☀️ Tema Claro";
        localStorage.setItem("tema", "dark");
    } else {
        btnTema.textContent = "🌙 Tema Escuro";
        localStorage.setItem("tema", "light");
    }
});
function play(playerChoice) {
  // remove animação anterior
  document.querySelectorAll(".choice").forEach(el => el.classList.remove("played"));
  // adiciona animação ao escolhido
  document.querySelector(`[onclick="play('${playerChoice}')"]`).classList.add("played");
  
}
const character = document.querySelector('.character');
const pipe = document.querySelector('.pipe');

const jump = () => {
    character.classList.add('jump');
    setTimeout(() => {
        character.classList.remove('jump');
    }, 500);
}

document.addEventListener('keydown', jump);
