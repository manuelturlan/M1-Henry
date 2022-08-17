function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // Divide el medio en conjuntos de dos grupos iguales
  if (array.length === 0) return [];

  let idxMedio = Math.floor(array.length / 2);
  let leftArray = array.splice(0, idxMedio)
  let rightArray = array;
  let mergeLeft = mergeSort(leftArray);
  let mergeRight = mergeSort(rightArray);

  return mergeSort(mergeLeft, mergeRight)
};

mergeSort([3, 4, 1, 2]);