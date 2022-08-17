"use strict";

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  num = num.split("").reverse().join("");
  for (let i = 0; i < num.length; i++) {
    sum = sum + parseInt(num[i]) * 2 ** i;
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  if (num === 1) return 1;
  return DecimalABinario(Math.floor(num / 2)) + "" + (num % 2);
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
