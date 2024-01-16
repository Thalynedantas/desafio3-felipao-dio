class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }
    atacar() {
        console.log(`o ${this.name} atacou usando ${this.type}`)
    }
}

let heroMago = new hero('Mago', 98, 'Magia')
let heroGuerreiro = new hero('Guerreiro', 49, 'Espada')
let heroMonge = new hero('Monge', 100, 'Artes Marciais')
let heroNinja = new hero('Ninja', 20, 'Shuriken')

heroMago.atacar();
heroGuerreiro.atacar();
heroMonge.atacar();
heroNinja.atacar();
