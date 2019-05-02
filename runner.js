class Runner {

    constructor(Nombre){
        this.position = 0;
        this.nombre = Nombre;
    }

    set Position(valor) {
        return this.position = valor;
    }

    get Position(){
        return this.position;
    }

    set Nombre(name){
        return this.nombre = name;
    }

    get Nombre(){
        return this.nombre;
    }

    run(){
        let randm = Math.floor(Math.random() * (4 - 1)) + 1;
        this.position = this.position + randm;
    }

}