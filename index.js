//Saida
console.log("Digite o nome do seu Herói")
//Variavel
let nickName  = "Alan"
//concatenando mensagem fixa + variavel
console.log("Bem vindo Herói " + nickName)
//concatenando variavel + mensagem fixa
console.log(nickName + " herói entrou no servidor")
//nivel de xp
let contador = 1
//if-else if-else
if(contador<= 1000){
    console.log(nivel = "Ferro")
} else if(contador <= 2000){
    console.log(nivel = "Bronze")
}else if(contador <= 5000){
    console.log(nivel ="Prata")
}else if(contador <= 7000){
    console.log(nivel = "Ouro")
}else if(contador <= 8000){
    console.log(nivel = "Platina")
}else if(contador <=9000){
    console.log(nivel = "Ascendente")
}else if(contador <= 10000){
    console.log(nivel = "Imortal")
}else{
    console.log(nivel ="Radiante")
}

//resultado
  console.log("O herói de nome " + nickName + " está no nível de " + nivel)