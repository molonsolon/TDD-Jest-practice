export const capitalize = (string) => {
  if (typeof string !== "string") {
    return null;
  }
  const stringArr = [...string];
  if (typeof stringArr[0] !== "string") {
    return null;
  } else if (stringArr[0] !== stringArr[0].toUpperCase()) {
    const cap = stringArr[0].toUpperCase();
    stringArr.splice(0, 1, cap);
    return stringArr.join("");
  }
};

export const reverseString = (string) => {
  if (typeof string !== "string") {
    return null;
  }
  const stringArr = [...string];
  const revArr = stringArr.reverse();
  return revArr.join("");
};

export const calculator = (() => {
  const add = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a + b;
    } else {
      return NaN;
    }
  };
  const subtract = (a, b) => {
    return a - b;
  };
  const multiply = (a, b) => {
    return a * b;
  };
  const divide = (a, b) => {
    return a / b;
  };

  return {
    add,
    subtract,
    multiply,
    divide,
  };
})();

export const caesarCipher = (string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphArr = [...alphabet];

  const stringArr = [...string];
  const arrShift = [];
  const findPush = (el) => {
    if (el === el.toUpperCase() && alphArr.includes(el.toLowerCase())) {
      const letter = alphArr.indexOf(el.toLowerCase());
      arrShift.push(alphArr[letter + 1].toUpperCase());
    } else if (alphArr.includes(el) === false) {
      arrShift.push(el);
    } else {
      const letter = alphArr.indexOf(el);
      arrShift.push(alphArr[letter + 1]);
    }
  };

  stringArr.forEach((el) => {
    findPush(el);
  });

  return arrShift.join("");
};

export const analyzeArray = (array) => {
  if (!array.every((x) => typeof x === 'number')) {
    return null;
  }
  
  const sum = array.reduce((preVal, curVal) => preVal + curVal);
  const avg = sum / array.length;
  const sorted = array.sort((a,b) => { return a -b });
  const minimum = sorted[0];
  const maximum = sorted[array.length - 1];
  const len = array.length
  const obj = { average: avg, min: minimum, max: maximum, length: len }
  console.log(obj)
  return obj;
};
