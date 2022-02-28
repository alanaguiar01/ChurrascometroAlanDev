let iAdulto = document.querySelector('.adulto');
let iCrianca = document.querySelector('.crianca')
let iDuracao = document.querySelector('.duracao')
let resultado = document.querySelector('.resultado')
let tipoDeCarne = document.getElementsByTagName('tiposDeCarne')
let iCarne = document.querySelector('.carne')
let iLinguica = document.querySelector('.linguica')
let iAsaDeFrango = document.querySelector('.asaDeFrango')
let iCerveja = document.querySelector('.cerveja')
let iVodka = document.querySelector('.vodka')
let iWhisky = document.querySelector('.whisky')
let iGuarana = document.querySelector('.guarana')
let iSuco = document.querySelector('.suco')
let iAgua = document.querySelector('.agua')
var index = 0;

function calcular(){
    let adulto = iAdulto.value
    let crianca = iCrianca.value
    let duracao = iDuracao.value

    let totalCarne = CarnePP(duracao) * adulto + CarnePP(duracao) / 2 * crianca;
    let totalAlcool = alcoolTotal(duracao) * adulto;
    let totalSemAcool = bebidaPP(duracao) * adulto + bebidaPP(duracao) * crianca / 2; 
    
    let [carne, linguica, asaDeFrango] = carnes(totalCarne)
    let [cerveja, vodka, whisky] = bebidasalcoolicas(duracao, totalAlcool)
    let [guarana, suco, agua] = bebidasSemAlcool(totalSemAcool)

    if(resultado.style.display == 'block'){
        resultado.style.display = 'none'
    }else{
        resultado.style.display = 'block'
    

    resultado.innerHTML = `<h1 class="titulo2">Resultado do churrasco, aproveite!</h1>`
    resultado.innerHTML += `<div class="resposta">
    <img src="./assets/icons/churrasqueira.png">
    <p>total de carnes é: ${totalCarne}g</p>
    </div>`
    resultado.innerHTML += `<div class="resposta">
    <img src="./assets./icons/carne.png">
    <p>Carne: ${carne}g</p>
    </div>` 
    resultado.innerHTML += `<div class="resposta">
    <img src="./assets/icons/linguica.png">
    <p>Linguiça: ${linguica}g</p>
    </div>`
    resultado.innerHTML += `<div class="resposta">
    <img src="./assets/icons/frango.png">
    <p>Asa de frango: ${asaDeFrango}g</p>
    </div>`
    resultado.innerHTML += `<div class="resposta">
    <p> total de bebida alcoólica é: ${totalAlcool}ml</p>
    </div>`

    resultado.innerHTML += `<div class="resposta">
    <img src="./icons/cerveja.png">
    <p> total de cerveja é: ${cerveja}ml</P>
    </div>`
    resultado.innerHTML += `<div class="resposta">
    <img src="./assets/icons/vodka.png">
    <p> total de vodka é ${vodka}ml</P>
    </div>`
    resultado.innerHTML += `<div class="resposta">
    <img src="./assets/icons/whisky.png">
    <p> total de whisky é: ${whisky}ml</P>
    </div>`
    resultado.innerHTML += `<div class="resposta">
    <p> total de bebida sem álcool é ${totalSemAcool}ml</p>
    </div>`

    resultado.innerHTML += `<div class="resposta">
    <img src="./assets/icons/refrigerante.png">
    <p> total de guaraná é: ${guarana}ml</P>
    </div>`
    resultado.innerHTML += `<div class="resposta">
    <img src="./assets/icons/suco.png">
    <p> total de suco é: ${suco}ml</P>
    </div>`
    resultado.innerHTML += `<div class="resposta">
    <img src="./assets/icons/agua.png">
    <p> total de água é: ${agua}ml</P>
    </div>`
    }
}

function CarnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}
function alcoolTotal(duracao){
    if(duracao >= 6){
        return 5000
    }else{
        return 3200
    }
}
function cervejaPP(duracao){
    if(duracao >= 6){
        return 3000
    }else{
        return 2000
    }
}

function vodkaPP(duracao){
    if(duracao >= 6){
        return 1000
    }else{
        return 600
    }
}

function whiskyPP(duracao){
    if(duracao >= 6){
        return 1000
    }else{
        return 600
    }
}
function bebidaPP(duracao){
    if(duracao >= 6){
        return 1500
    }else{
        return 1000
    }
}
function limpar(){
    if(iAdultoa = document.querySelector('.adulto').value!=''){  
        iAdulto = document.querySelector('.adulto').value=''
        iCrianca = document.querySelector('.crianca').value=''
        iDuracao = document.querySelector('.duracao').value=''
    }
    
    if(iCarne = document.querySelector('.carne').type == 'checkbox'){
       iCarne = document.querySelector('.carne').checked = false
       iLinguica = document.querySelector('.linguica').checked = false
       iAsaDeFrango = document.querySelector('.asaDeFrango').checked = false
       iCerveja = document.querySelector('.cerveja').checked = false
       iVodka = document.querySelector('.vodka').checked = false
       iWhisky = document.querySelector('.whisky').checked = false
       iGuarana = document.querySelector('.guarana').checked = false
       iSuco = document.querySelector('.suco').checked = false
       iAgua = document.querySelector('.agua').checked = false
    }
    if(resultado.style.display=='block'){
        resultado.style.display='none'
    }
}
function carnes(totalCarne){
    let carne = 0
    let linguica = 0
    let asaDeFrango = 0


    if(iCarne.checked && iLinguica.checked && iAsaDeFrango.checked){
        carne = totalCarne / 2;
        linguica = carne / 2;
        asaDeFrango = carne / 2;  
        
    }
    else if(iCarne.checked && iLinguica.checked ){
        linguica = totalCarne / 2;
        carne = totalCarne / 2;
    }
    else if(iAsaDeFrango.checked && iCarne.checked){
        asaDeFrango = totalCarne / 2;
        carne = totalCarne / 2;
    }
    else if(iLinguica.checked && iAsaDeFrango.checked){
        linguica = totalCarne / 2;
        asaDeFrango = totalCarne / 2;
    }else{
        alert('escolha duas opções no minimo de tipos de carne!')
    }
    return [carne, linguica, asaDeFrango]
}

function bebidasalcoolicas(duracao, totalAlcool){
    let cerveja = 0;
    let vodka  = 0;
    let whisky = 0;
    let adulto = iAdulto.value

    if(iCerveja.checked && iVodka.checked && iWhisky.checked){
        cerveja = cervejaPP(duracao) * adulto
        vodka = vodkaPP(duracao) * adulto
        whisky = whiskyPP(duracao) * adulto
    }else if(iCerveja.checked && iVodka.checked){
        vodka = vodkaPP(duracao) * adulto
        cerveja = totalAlcool - vodka
    }else if(iCerveja.checked && iWhisky.checked){
        whisky = whiskyPP(duracao) * adulto
        cerveja = totalAlcool - whisky
    }else if(iVodka.checked && iWhisky.checked){
        vodka = vodkaPP(duracao) * adulto
        whisky = whiskyPP(duracao) * adulto
    }else if(iCerveja.checked){
         cerveja = totalAlcool;
    }else if(iVodka.checked){
         vodka = totalAlcool / 2;
    }else if(iWhisky.checked){
         whisky = totalAlcool / 2;
    }else{
        alert('Escolha 1 tipo de bebida com alcool')
    }
    return [cerveja, vodka, whisky]
}

function bebidasSemAlcool(totalSemAcool){
    let guarana = 0
    let suco = 0
    let agua = 0

    if(iGuarana.checked && iSuco.checked && iAgua.checked){
        guarana = totalSemAcool / 2;
        suco = guarana / 2;
        agua = guarana / 2;
    }else if(iGuarana.checked && iSuco.checked){
        guarana = totalSemAcool / 2;
        suco = totalSemAcool / 2;
    }else if(iGuarana.checked && iAgua.checked){
        guarana = totalSemAcool / 2;
        agua = totalSemAcool / 2;
    }else if(iSuco.checked && iAgua.checked){
        suco = totalSemAcool / 2;
        agua = totalSemAcool / 2; 
    }else if(iGuarana.checked){
        guarana = totalSemAcool
    }else if(iSuco.checked){
        suco = totalSemAcool
    }else if(iAgua.checked){
        agua = totalSemAcool
    }
    else{
        alert('escolha uma opção de bebida sem alcool')
    }
    return [guarana,suco,agua]

}

function slide (id){
    const arrayImg = document.getElementById(id).getElementsByTagName('img')
    
    if(index > arrayImg.length - 1){
      index = 0
    }
    for(let i = 0; i < arrayImg.length; i++){
      const element = arrayImg[i]
      element.style.display = 'none'
    }
    
    const elementoAtual = arrayImg[index]
    elementoAtual.style.display = 'block'
    index++
    
}
setInterval(() => { 
     slide('container')
},3000);