const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const biscoito = document.querySelector('#biscoito')
const dinovo = document.querySelector('#dinovo')
const bilhete = document.querySelector('#bilhete')
let diferentFrases = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o   teu.", 
  "Sonhos são caminhos construídos pelo coração.",
  "Impossível é uma palavra que serve só de enfeite no dicionário.",
  "Você é beleza, luz e força.",
  "Dias nublados guardam o sol atrás deles.",
  "Um dia bonito começa com um barril de esperança e um café de otimismo.",
  "Por trás de um dia difícil, há uma versão forte de você que sempre seguiu em frente."
]

randomNumber = Math.round(Math.random() * 7)
if (randomNumber > 6) randomNumber = 6;

bilhete.textContent = diferentFrases[randomNumber]

biscoito.addEventListener('click', handleClick)
dinovo.addEventListener('click', handleResetClick)

function handleClick(){
  toggleScreen() 
  

}

function handleResetClick() {
  toggleScreen()

}

function toggleScreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

