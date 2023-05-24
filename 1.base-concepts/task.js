"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  if (d < 0) {
    return arr;
  }
  if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
    return arr;
  }
  let x1 = (-b + Math.sqrt(d) ) / (2 * a);
  let x2 = (-b - Math.sqrt(d) ) / (2 * a);
  arr.push(x1, x2)
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentTransformed = percent / 100;
  let annualPercent = percentTransformed / 12;
  let bodyCredit = amount - contribution;
  let monthPayment = bodyCredit * (annualPercent + (annualPercent / (((1 + annualPercent)**countMonths) - 1)));
  let totalAmount = Math.round(monthPayment * countMonths * 100) / 100;
  return totalAmount;
} 