window.addEventListener('load', function(){
    let Red = document.querySelector('#Red')
    let Blue = document.querySelector('#Blue')
    let Green = document.querySelector('#Green')
    
    let RanDef = random()
    
    let btnNewColor = document.querySelector('#Newcolor')
    btnNewColor.addEventListener('click', e=>{
        RanDef = random()    
    })
    let btnComparar = document.querySelector('#comparar')
    btnComparar.addEventListener('click', e =>{
        let RGBdef = [Red.value,Green.value,Blue.value]
        let diferencia = calcularDiferencia(RGBdef, RanDef);
        let porcentajeParecido = 100 - (diferencia / (255 * 3) * 100);
        resultado(porcentajeParecido.toFixed(2) + '%')
    });

    function calcularDiferencia(rgb1, rgb2) {
        let diferencia = 0;
        for (let i = 0; i < 3; i++) {
            diferencia += Math.abs(rgb1[i] - rgb2[i]);
        }
        return diferencia;
    }


 

    Red.addEventListener('input',function() {
        refresh()
    })
    Blue.addEventListener('input',function() {
        refresh()
    })
    Green.addEventListener('input',function() {
        refresh()
    })

    function refresh() {
        let RGBdef = `RGB(${Red.value},${Green.value},${Blue.value})`
        let caja = document.querySelector('#cubo');
        caja.style.background = RGBdef;
    }

    function random(){
        let RandomBlue = Math.floor(Math.random()* (256 - 0) + 0);
        let RandomRed = Math.floor(Math.random()* (256 - 0) + 0);
        let RandomGreen = Math.floor(Math.random()* (256 - 0) + 0);
        let RandomDef = `RGB(${RandomRed},${RandomGreen},${RandomBlue})`
        let Ranciada = [RandomRed, RandomGreen, RandomBlue ]
        let cajaDef = document.querySelector('#cuboRandom'); 
        cajaDef.style.background = RandomDef;
        return Ranciada
    }
    let a = 1
    let pizzara = document.querySelector('.pizarra')
    let btnpizarra = document.querySelector('#btnPizarra')
    btnpizarra.addEventListener('click', e=>{
        if (a == 0) {
            pizzara.classList.add('show');
            btnpizarra.classList.add('show');
            a = 1
        }else{
            pizzara.classList.remove('show');
            btnpizarra.classList.remove('show');
            a = 0
        }
        
    })

    let res = document.querySelector('#resultados')
    function resultado(x){
        res.innerHTML += `<div style="background: rgb(${Red.value},${Green.value},${Blue.value});" class="color">rgb(${Red.value},${Green.value},${Blue.value})</div> <div style="background:rgb(${RanDef[0]},${RanDef[1]},${RanDef[2]});" class="color">rgb(${RanDef[0]},${RanDef[1]},${RanDef[2]})</div><span>${x}</span>`
        RanDef=random()
    }
})
