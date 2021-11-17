// Ejercicio 1: encontrar el número mayor en un array

// const numeros = [2, 3, 4, 99, 5, 9, 65, 32]
// const masNumeros = [43, 21, 23, 66, 54, 32, 199, 54, 63]

// const encontrarNumeroMayor = (array) => {
//     const numeroMayor = array.reduce((acc, elemento) => {
//         if (elemento > acc) {
//             acc = elemento;
//         }
//         return acc;
//     }, 0);

//     return numeroMayor;
// }

// console.log(encontrarNumeroMayor(numeros)) // deberías ver 99
// console.log(encontrarNumeroMayor(masNumeros)) // deberías ver 199

// Ejercicio 2: encontrar el objeto con mayor monto en un array

const objetos = [
    {
      tipo: "ganancia",
      categoria: "comida",
      monto: 10,
    },
    {
      tipo: "ganancia",
      categoria: "salida",
      monto: 100,
    },
    {
      tipo: "gasto",
      categoria: "salida",
      monto: 1000,
    },
    {
      tipo: "gasto",
      categoria: "salida",
      monto: 10000,
    },
    {
      tipo: "ganancia",
      categoria: "comida",
      monto: 1000,
    },
  ];

// const encontrarNumeroMayorEnArrayDeObjetos = (array) => {
//     const objetoConMontoMayor = array.reduce((acc, elemento) => {
//         if (elemento.monto > acc.monto ) {
//             acc = elemento;
//         }
//         return acc;
//     })
//     return objetoConMontoMayor;
// }

// console.log(encontrarNumeroMayorEnArrayDeObjetos(objetos));

// Ejercicio 3: obtener objeto con mayor ganancia

// const obtenerObjetoConMayorGanancia = (array) => {
//     const ganancias = array.filter((elemento) => {
//         return elemento.tipo === "ganancia";
//     })
//     const objetoConMayorGanancia = ganancias.reduce((acc, elemento) => {
//         if (elemento.monto > acc.monto) {
//             acc = elemento
//         }
//         return acc;
//     })
//     return objetoConMayorGanancia;
// }

// console.log(obtenerObjetoConMayorGanancia(objetos));

// Ejercicio 4: obtener categoría del objeto con mayor ganancia

const obtenerCategoriaConMayorGanancia = (array) => {
    const categoriaConMayorGanancia = array.reduce((acc, elemento) => {
        if (elemento.tipo === "ganancia" && elemento.monto > acc.monto) {
            acc = elemento
        }
        return acc;
    })
    return categoriaConMayorGanancia.categoria;
}

console.log(obtenerCategoriaConMayorGanancia(objetos));