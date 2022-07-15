let inputcorda = document.getElementById("corda")

let salt = document.getElementById("salt")

function calc(){
console.log("calculando...")

let corda = inputcorda.value 

let pulos = 15 * corda  
console.log(pulos)


salt.innerHTML = ` <p>${pulos} calorias gastas em ${corda} minutos </p>`
}


let inputvel = document.getElementById("vel")
let inputpes = document.getElementById("pes")

let corr = document.getElementById("corr")

function cal(){
console.log("calculando")

let vel = inputvel.value
let pes = inputpes.value

let tot = vel * pes * 0.0175
console.log(tot)

}