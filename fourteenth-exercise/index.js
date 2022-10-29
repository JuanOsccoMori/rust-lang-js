class Estudent {
    _asignatures  = ["Javascript", "HTML", "CSS"];
    constructor(name, asignatures) {
        this._name = name;
        this._asignatures = asignatures
    }
    obtenDatos() {
        return `${this._name} ${this._asignatures}`;
    }
}

const estudent_one = new Estudent("Jhon", "CSS");

console.log(estudent_one);
console.log(estudent_one.obtenDatos());