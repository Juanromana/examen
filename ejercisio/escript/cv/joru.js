
// 1 ejeercisio
// let nom = prompt ("ingresa tu nombre");
// let edad = prompt("ingrese su edad");
// // perseInt (ed
//     edad >= 18? alad);ert (`hola ${nom} eres mayor de edad, tienes ${edad}`) :  alert(`hola ${nom} eres menor de edad, tienes  ${edad}`);

// 2 ejecisio
// let num1 = prompt("ingrese su primer numero");
// let num2 = prompt("ingrese su segundo numero"); 

// if (num1 == num2){
//     alert(`${num1} son iguales ${num2}`) ;
// }else if (num1 > num2){
//     alert(`el numero mayor es ${num1} ">" ${num2}`) ;
// }else {
//     alert(`${num2} es mayor es ${num1}`) ;
// }


// Crear un programa que realice una encuesta con los siguientes datos: nombre, salario, edad y carrera 
// (1: administración, 2: derecho, 3: medicina, 4: sistemas).
// Calcular e imprimir:

// Carrera con más alumno.
// Promedio de salario de los alumnos de administración.
// Edad de la persona con mayor salario me lo relisas usando 

let detenerciclo =0;
let contadorAdmin = 0;
let contadorDerecho = 0;
let contadorMedicina = 0;
let contadorSistemas = 0;
let totalSalarioAdmin = 0;
let cantidadAlumnosAdmin = 0;
let maxSalario = 0;
do {
    let nombre = prompt("Ingrese su  nombre:");
    let salario = parseFloat(prompt("Ingrese su salario:"));
    let edad = parseInt(prompt("Ingrese su edad:"));
    let carrera = parseInt(prompt("Ingrese su carrera (1: administración, 2: derecho, 3: medicina, 4: sistemas):"));
    
    if (carrera === 1) {
        contadorAdmin++;
        totalSalarioAdmin += salario;
        cantidadAlumnosAdmin++;
    } else if (carrera === 2) {
        contadorDerecho++;
    } else if (carrera === 3) {
        contadorMedicina++;
    } else if (carrera === 4) {
        contadorSistemas++;
    } else {
        alert("occin incorreta es solo del 1 al 4.");
    }
   detenerciclo = parseInt(prompt("desea ingresar(1:si, 2:no)"));
    
} while (detenerciclo !==2);

alert(`Carrera con más alumnos: ${carreraMasAlumnos}`);
alert(`Promedio de salario de los alumnos de administración: ${promedioSalarioAdmin}`);
alert(`Edad de la persona con mayor salario: ${edad}`);
