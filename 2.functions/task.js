"use strict";
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum = arr[i] + sum;
  }

  let avg = sum / arr.length;
  avg = Math.round(avg * 100) / 100;

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  const initialValue = 0;
  const sumElements = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumElements;
}

function differenceMaxMinWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  const differenceMaxMin = Number(Math.max(...arr)) - Number(Math.min(...arr));

  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
    }
    else {
      sumOddElement = sumOddElement + arr[i];
    }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {

}
