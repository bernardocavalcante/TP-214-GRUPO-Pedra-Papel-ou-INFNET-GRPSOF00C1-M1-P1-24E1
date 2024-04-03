let usuario = prompt("Escolha Pedra, Papel ou Tesoura: ")
let escolha_computador = ["Pedra", "Papel", "Tesoura"] // para lista sempre usa colchetes []
let computador = escolha_computador[Math.floor(Math.random() * 3)]
alert("computador: "+computador)
console.log("eu: " + usuario)

if (computador === "Pedra" && usuario === "Papel" || computador === "Papel" && usuario === "Tesoura" || computador === "Tesoura" && usuario === "Pedra") {
  alert("Você ganhou!")
} else if (computador === usuario) {
  alert("Empatou com a máquina!")
} else {
  alert("Você perdeu!")
}



