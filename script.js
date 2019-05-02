var corredorUno = new Runner
var corredorDos = new Runner

corredorUno.Nombre = prompt('Ingrese el nombre del corredor 1')
corredorDos.Nombre = prompt('Ingrese el nombre del corredor 2')

document.getElementById('butt').addEventListener('click',() => {
    for (let index = 0; index <= 100; index++) {
        corredorUno.run()
        corredorDos.run()
        console.log(`Corredor uno ${corredorUno.nombre} ${corredorUno.position}, Corredor dos ${corredorDos.nombre} ${corredorDos.position}`)
        if (corredorUno.position >= 100) {
            console.log(`Felicidades ${corredorUno.nombre}`);
            corredorUno.position = 0
            corredorDos.position = 0
            break
        }
        else if (corredorDos.position >= 100) {
            console.log(`Felicidades ${corredorDos.nombre}`);
            corredorUno.position = 0
            corredorDos.position = 0
            break
        }
        else if(corredorUno.position >= 100 && corredorDos.position >= 100)
        {
            console.log('Empate');
            corredorUno.position = 0
            corredorDos.position = 0
            break
        }
    }
})