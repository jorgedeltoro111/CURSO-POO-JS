class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
      // Tu código aquí 👈
      let band = false;
      if(this.integrantes.length !== 0){
        for (const integrante of this.integrantes) {
            if(integrante.instrumento === 'Bateria'){
                band = true;
            }
        }
        if(band===true && integranteNuevo.instrumento ==='Bateria'){
            console.log('Ya hay baterista');
        }else{
            this.integrantes.push(integranteNuevo);
            console.log(`${integranteNuevo.nombre} agregado correctamente!`);
        }
      }else{
        this.integrantes.push(integranteNuevo);
        console.log(`${integranteNuevo.nombre} agregado correctamente!`);
      }
    }
    mostrarIntegrantes(){
        for (const integrante of this.integrantes) {
            console.log(`${integrante.nombre} -> ${integrante.instrumento}`);
        }
    }
  }
  //Crear clase Integrante
class Integrante {
    constructor({ nombre, instrumento }) {
      this.nombre = nombre;
      this.instrumento = instrumento;
    }
  }
  
const musico1 = new Integrante({nombre: 'pedro', instrumento: 'Bateria'});
const musico2 = new Integrante({nombre: 'Ale', instrumento: 'Bateria'});
const musico3 = new Integrante({nombre: 'polola', instrumento: 'Guitarrista'});
const banda = new Banda({nombre: 'locochones', genero: 'rock'});
banda.agregarIntegrante(musico1);
banda.agregarIntegrante(musico2);
banda.agregarIntegrante(musico3);


