'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let randomIdx = Math.floor(Math.random() * array.length);

     if (array.length === 0) return [];
   
     let pivote = array[randomIdx];
   
     //los números más grandes
     let arrayDer = [];
     let pivot = [pivote];
     //los números más chicos
     let arrayIzq = [];
   
     for (let i = 0; i < array.length; i++) {
       if (i !== randomIdx) {
         if (array[i] > pivote) {
           arrayDer.push(array[i]);
         } else {
           arrayIzq.push(array[i]);
         }
       }
     }
   
     arrayIzq = quickSort(arrayIzq);
     arrayDer = quickSort(arrayDer);
     return arrayIzq.concat(pivot).concat(arrayDer);
}

function merge(leftArray, rightArray) {
  let leftIndex = 0;
  let rightIndex = 0;

  let arrOrder = [];
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      arrOrder.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      arrOrder.push(rightArray[rightIndex]);
      rightIndex++;
    } 
  }
  return arrOrder.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length === 1) return array;

  // Dividir en 2 mi array

  let middleIdx = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middleIdx);
  let rightArray = array.slice(middleIdx);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
