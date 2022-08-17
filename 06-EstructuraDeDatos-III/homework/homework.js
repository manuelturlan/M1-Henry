"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}
BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }

  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) return 1;

  if (!this.right) {
    return 1 + this.left.size();
  }

  if (!this.left) {
    return 1 + this.right.size();
  }

  if (this.left && this.right) {
    return 1 + this.left.size() + this.right.size();
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (value > this.value) {
    if (this.right) {
      if (this.right.value === value) {
        return true;
      } else {
        return this.right.contains(value);
      }
    } else {
      return false;
    }
  }

  if (value < this.value) {
    if (this.left) {
      if (this.left.value === value) {
        return true;
      } else {
        return this.left.contains(value);
      }
    } else {
      return false;
    }
  }
};

BinarySearchTree.prototype.depthFirstForEach = function (cb, flag) {
  if (!flag || flag === "in-order") {
    if (this.left) {
      this.left.depthFirstForEach(cb, flag);
    }
    cb(this.value);
    if (this.right) {
      this.right.depthFirstForEach(cb, flag);
    }
  }

  if (flag === "pre-order") {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstForEach(cb, flag);
    }
    
    if (this.right) {
      this.right.depthFirstForEach(cb, flag);
    }
  }

  if (flag === "post-order") {
    if (this.left) {
      this.left.depthFirstForEach(cb, flag);
    }
    
    if (this.right) {
      this.right.depthFirstForEach(cb, flag);
    }

    cb(this.value);
  }
};

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array=[]) {
  cb(this.value);

  if (this.left) {
    array.push(this.left);
  }

  if (this.right) {
    array.push(this.right);
  }

  let nextNode = array.shift();
  if (nextNode) {
    nextNode.breadthFirstForEach(cb, array);
  }
};

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
