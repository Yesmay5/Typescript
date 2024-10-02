"use strict";
let nombre = "Kevin";
nombre = "Yesmay";
//console.log(nombre)
let numero = 2024;
const e1 = {
    firstName: "Michel",
    lastName: "Ballen",
    age: 21,
    address: {
        ad: "cl 33",
        city: "Bogota",
        country: "Colombia"
    }
};
const e2 = {
    firstName: "Eric",
    lastName: "Molano",
    age: 34,
    address: {
        ad: "cl 45",
        city: "Medellin",
        country: "Colombia"
    }
};
//funcion para mostrar infor del estudiante
//version declarativa
/*
const mostrarEstudiante =
        (estudiante: estudiante): string => {
            return (estudiante.firstName
                   +", " +
                   estudiante.age
                   +", " +
                    estudiante.address.country
    )
*/
const mostrarEstudiante = (estudiante) => {
    const { firstName, lastName } = estudiante;
    return ` Nombre de estudiante: ${firstName} ; `;
};
//console.log(mostrarEstudiante (e2))
/*
ARREGLOS
Crear un arreglo de estudiantes:
recorrer el arreglo de estudiante
imprimiendo nombre y apellido
con el metodo de arreglo de forEach
*/
//let estudiante: estudiante [] = [e1]
/*
estudiante.forEach(estudiante => {
    console.log(`Nombre: ${estudiante.firstName}, Apellido: ${estudiante.lastName}`);
});
*/
//agregar un estudiante 
let estudiantes = [];
const agregarEstudiante = (nuevoEstudiante) => {
    estudiantes.push(nuevoEstudiante);
};
const eliminarEstudiante = (indice) => {
    estudiantes.splice(indice, 1);
};
const actualizarEstudiante = (indice, estudianteActualizado) => {
    if (indice < 0 || indice >= estudiantes.length) {
        console.log("Índice fuera de rango");
        return;
    }
    estudiantes[indice] = estudianteActualizado;
};
agregarEstudiante({
    firstName: "Luber",
    lastName: "Quintero",
    age: 34,
    address: {
        ad: "Calle 87",
        city: "Soacha",
        country: "Colombia"
    }
});
agregarEstudiante({
    firstName: "Laura",
    lastName: "Gonzalez",
    age: 23,
    address: {
        ad: "Calle 23",
        city: "Soacha",
        country: "Colombia"
    }
});
actualizarEstudiante(1, {
    firstName: "Laura",
    lastName: "Gonzalez",
    age: 23,
    address: {
        ad: "Calle 87A",
        city: "Soacha",
        country: "Colombia"
    }
});
//eliminarEstudiante (0)
console.log(estudiantes);
