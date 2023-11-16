window.addEventListener('load', function(){
    let RGBred = document.querySelector('#RGBred')
    let RGBblue = document.querySelector('#RGBblue')
    let RGBgreen = document.querySelector('#RGBgreen')

    random()
 
    RGBred.addEventListener('input',function() {
        refresh()
    })
    RGBblue.addEventListener('input',function() {
        refresh()
    })
    RGBgreen.addEventListener('input',function() {
        refresh()
    })

    function refresh() {
        let RGBdef = `rgb(${RGBred.value},${RGBgreen.value},${RGBblue.value})`
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

        let RandomDef = `rgb(${RandomRed},${RandomGreen},${RandomBlue})`
        document.querySelector('#rgbDef').innerHTML = RandomDef;
        let cajaDef = document.querySelector('#cuboRandom'); 
        cajaDef.style.background = RandomDef;
        console.log(RandomDef)
    }
})