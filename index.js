console.log("hola");


// Ejercicios reduce
// 1
// Tenemos un array llamado numbers con números enteros al azar.

// Utilizando reduce, queremos calcular la suma de todos los números que están en el array.
// Por ejemplo: Si tenemos [1, 2, 3], la suma de todos los números es 6
const numbers = [6, 1, 34, 94, 3, 17];

// codea debajo de este comentario la solucion al ejercicio
const sumaTotal = numbers.reduce((acc, elemento)=>{
    return acc + elemento
}, 0)
console.log(sumaTotal);
// deberia mostrar 155


// 2
// Tenemos un array llamado numbers con números enteros al azar.
// Utilizando reduce, queremos calcular la multiplicación de todos los números que están en el array.
const numbers2 = [6, 1, 34, 94, 3, 17];

// codea debajo de este comentario la solucion al ejercicio
const multiplicacion = numbers2.reduce((acc, elemento)=>{
    return acc * elemento
}, 1)
console.log(multiplicacion);
// deberia mostrar 977976


// 3
// Tenemos un array llamado notasDeTPs con números del 1 al 10, que representan las notas de los distintos trabajos prácticos entregados por Grace Hopper en el curso de Ada.
// Usando reduce, queremos calcular la nota promedio final de trabajos prácticos (el promedio se calcula sumando todas las notas y dividiéndolo por la cantidad de notas, o dividiendo cada nota por la cantidad total y luego sumando los resultados).
// Por ejemplo: Si tenemos [7, 8, 9, 10], la nota final es 8.5
const notasDeTPs = [4, 7, 8, 5, 10];

// codea debajo de este comentario la solucion al ejercicio
const notaPromedio = notasDeTPs.reduce ((acc, elemento)=>{
    return acc + (elemento / notasDeTPs.length)
}, 0)
console.log(notaPromedio);
// deberia mostrar 6.8


// 4
// Tenemos un array en una variable libros con libros para leer sobre Javascript.
// Usar la función reduce para crear un string con todos los titulos de los libros encerrados en una etiqueta <li></li>.
// Mostrar por consola el array nuevo
// Ayuda: ojo con el valor de comienzo
const librosDeJS = [
  'JavaScript for Kids: A Playful Introduction to Programming',
  'Composing Software',
  'Eloquent JavaScript: A Modern Introduction to Programming',
  'JavaScript: The Good Parts',
  'Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries',
  'Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript',
  'JavaScript: The Definitive Guide',
  'You Don’t Know JS',
  'JavaScript Allongé: The Six Edition'
];

// codear acá la solución del ejercicio
const librosEtiquetados = librosDeJS.reduce((acc, elemento)=>{
    return acc + `<li>${elemento}</li>`
}, "")
console.log(librosEtiquetados);

// el resultado final debería ser
// <li>JavaScript for Kids: A Playful Introduction to Programming</li><li>Composing Software</li><li>Eloquent JavaScript: A Modern Introduction to Programming</li><li>JavaScript: The Good Parts</li><li>Programming JavaScript Applications: Robust Web Architecture with Node, HTML5, and Moderns JS Libraries</li><li>Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript</li><li>JavaScript: The Definitive Guide</li><li>You Don’t Know JS</li><li>JavaScript Allongé: The Six Edition</li>


// 5
// Tenemos un array de objetos llamado personas con personas y edades .

// Utilizando reduce, queremos calcular la suma de todas las edades que están en el array.
// Ayuda: ojo con el valor de comienzo
const personas = [
    {nombre: "Grace", 
    edad: 6
    }, 
    {nombre: "Ada", 
    edad: 19
    },
    {nombre: "Hedy", 
    edad: 34
    }
  ];

// codea debajo de este comentario la solucion al ejercicio
const sumaEdades = personas.reduce((acc, elemento)=>{
    return acc + elemento.edad
}, 0)
console.log(sumaEdades);
// deberia mostrar 59


// integrador de todos los metodos
// Tenemos un array en una variable datos con números al azar, que pueden ser tanto positivos como negativos
// Queremos eliminar todos los números negativos
// Con los números restantes, obtener el doble de cada uno
// Finalmente, obtener la suma de todos los números que obtuvimos
// Podes hacerlo con uno o varios de los metodos que ya vimos:  map, filter, some, every y reduce.
const datos = [2, -4, 6, 0, 5, -1];

// codear acá la solución del ejercicio
const eliminarNegativos = datos.filter((elemento, index, array)=>{
    return elemento >= 0
})
console.log(eliminarNegativos);

const obtenerDoble = eliminarNegativos.reduce((acc, elemento)=>{
    return acc + (elemento * 2)
}, 0)

console.log(obtenerDoble);
// deberia mostrar 26