window.addEventListener('load', function(){
    let Red = document.querySelector('#Red')
    let Blue = document.querySelector('#Blue')
    let Green = document.querySelector('#Green')

    random()
 
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
        console.log(RGBdef)
        document.querySelector('#rgbRan').innerHTML = RGBdef;
    }

    function random(){
        console.log('hola')
        let RandomBlue = Math.floor(Math.random()* (256 - 0) + 0);
        let RandomRed = Math.floor(Math.random()* (256 - 0) + 0);
        let RandomGreen = Math.floor(Math.random()* (256 - 0) + 0);

        let RandomDef = `RGB(${RandomRed},${RandomGreen},${RandomBlue})`
        document.querySelector('#rgbDef').innerHTML = RandomDef;
        let cajaDef = document.querySelector('#cuboRandom'); 
        cajaDef.style.background = RandomDef;
        console.log(RandomDef)
    }
})