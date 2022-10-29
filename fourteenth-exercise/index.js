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

/**
 * Otra forma de resolver el ejercicio
 */

 class Estudiante {
    nombre = "Gorka"
    asignaturas = ["Javascript", "HTML", "CSS"]

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas
        }
    }
}

const estudiante = new Estudiante()

console.log(estudiante.obtenDatos())