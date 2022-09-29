function modifyMultiply(str, loc, num) {
  let word = str.split(" ")[loc];
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(word);
  }
  return arr.join("-");
}

function findShort(s) {
  let res = s.split(" ").reduce((a, b) => (a.length < b.length ? a : b));
  return res.length;
}

function getSum(a, b) {
  let count = 0;
  if (a <= b) {
    for (let i = a; i <= b; i++) {
      count += i;
    }
  } else {
    for (let i = a; i >= b; i--) {
      count += i;
    }
  }
  return count;
}

function maskify(cc) {
  let str = cc.slice(0, -4).length;
  return cc.replace(cc.slice(0, -4), "#".repeat(str));
}

const binaryArrayToNumber = (arr) => {
  return parseInt(arr.join(""), 2);
};

function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split("")
      .map((el) => Math.pow(el, 2))
      .join("")
  );
}

var isSquare = function (n) {
  let a = parseInt(Math.sqrt(n));
  if (a * a === n) {
    return true;
  } else {
    return false;
  }
};

function highAndLow(numbers) {
  let arr = [];
  let min = numbers
    .split(" ")
    .map((e) => parseInt(e))
    .reduce((a, b) => (a < b ? a : b));
  let max = numbers
    .split(" ")
    .map((e) => parseInt(e))
    .reduce((a, b) => (a > b ? a : b));
  arr.push(max, min);
  return arr.join(" ");
}

function longest(s1, s2) {
  let arr = (s1 + s2).split("").sort();
  let set = new Set(arr);
  let arr2 = [];
  for (let elem of set) {
    arr2.push(elem);
  }
  return arr2.join("");
}

function friend(friends) {
  let res = [];
  friends.map((item) => (item.length === 4 ? res.push(item) : res));
  return res;
}

function oddOrEven(array) {
  let sum = 0;
  array.forEach((item) => (sum += item));
  if (array.length === 0) {
    return "even";
  }
  if (sum % 2 === 0) {
    return "even";
  }
  return "odd";
}

function hasUniqueChars(str) {
  return new Set(str).size === str.length;
}

function accum(s) {
  let arr = s.split("").map((e, i) => e.repeat(i + 1));
  return arr
    .map((item) => item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase())
    .join("-");
}

function sumTwoSmallestNumbers(n) {
  return n.sort()[0] + n.sort()[1];
}

function divisibleBy(numbers, divisor) {
  return numbers.filter((item) => item % divisor === 0);
}

function contamination(text, char) {
  return char.repeat(text.length);
}

function invert(array) {
  return array.map((item) => {
    if (item >= 0) {
      return item * -1;
    } else {
      return Math.abs(item);
    }
  });
}

function findNeedle(haystack) {
  let ind = haystack.indexOf("needle");
  if (haystack.includes("needle")) {
    return `found the needle at position ${ind}`;
  }

  return "Your function didn't return anything";
}

let summation = function (num) {
  let result = 0;
  for (var i = 1; i <= num; i++) {
    result += i;
  }

  return result;
};

function sumMul(n, m) {
  let res = 0;
  for (let i = n; i < m; i += n) {
    res += i;
  }
  return res;
}

function rentalCarCost(d) {
  if (d >= 3 && d < 7) {
    return d * 40 - 20;
  }
  if (d >= 7) {
    return d * 40 - 50;
  }
  return d * 40;
}

function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((elem) => elem !== "!")
    .join("");
}

Array.prototype.remove_ = function (integer_list, values_list) {
  return integer_list.filter((item) => !values_list.includes(item));
};

var number = function (array) {
  return array.map((item, index) => `${index + 1}: ${item}`);
};

function smallEnough(a, limit) {
  return a.every((item) => (item <= limit ? true : false));
}

const areaOrPerimeter = function (l, w) {
  return l === w ? l * w : l * 2 + w * 2;
};

function remainder(n, m) {
  let min = Math.min(n, m);
  let max = Math.max(n, m);
  if (min === 0) {
    return NaN;
  }
  return max % min;
}

function shortcut(string) {
  let arr = ["a", "e", "i", "o", "u"];
  return string
    .split("")
    .filter((elem) => !arr.includes(elem))
    .join("");
}

function maxMultiple(divisor, bound) {
  return bound - (bound % divisor);
}

function adjacentElementsProduct(array) {
  let res = array.map((item, index) => item * array[index + 1]);
  res.pop();
  return Math.max(...res);
}

function toAcronym(inp) {
  return inp
    .split(" ")
    .map((item) => item.slice(0, 1))
    .join("")
    .toUpperCase();
}

function countBy(x, n) {
  let z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

function productArray(numbers) {
  return numbers.map((x) => numbers.reduce((a, b) => a * b) / x);
}

function giveChange(amount) {
  let arr = [1, 5, 10, 20, 50, 100];
  let res = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    res.unshift((amount - (amount % arr[i])) / arr[i]);
    amount -= amount - (amount % arr[i]);
  }
  return res;
}

const orderedCount = function (text) {
  return [...new Set([...text])].map((item) => [
    item,
    text.split(item).length - 1,
  ]);
};

function pattern(n) {
  if (n < 1) return "";
  let res = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      res += i;
    }
    res += "\n";
  }
  return res.slice(0, -1);
}

function searchNames(logins) {
  return logins.filter((item) => item[0][item[0].length - 1] === "_");
}

function dotCalculator(equation) {
  const res = equation.split(" ");
  let str = "";
  if (res[1] === "+") {
    str += res[0] + res[2];
  }
  if (res[1] === "*") {
    str += ".".repeat(res[0].length * res[2].length);
  }
  if (res[1] === "-") {
    if (res[0] > res[2]) {
      str += ".".repeat(res[0].length - res[2].length);
    } else {
      str;
    }
  }
  if (res[1] === "//") {
    if (res[0] >= res[2]) {
      str += ".".repeat(res[0].length / res[2].length);
    } else {
      str;
    }
  }
  return str;
}

const onePunch = (items) =>
  typeof items !== "string"
    ? "Broken!"
    : items.split(" ").sort().join(" ").replace(/[ae]/gi, "") || "Broken!";

const number = function (busStops) {
  let a = 0;
  let b = 0;
  busStops.forEach((el) => (a += el[0]));
  busStops.forEach((el) => (b += el[1]));
  return a - b;
};

function solution(start, finish) {
  if ((finish - start) % 3 === 2) {
    return Math.ceil((finish - start) / 3) + 1;
  }
  return Math.ceil((finish - start) / 3);
}

function shapeArea(n) {
  let count = 1;
  for (let i = 1; i < n; i++) {
    count += 4 * i;
  }
  return count;
}

function hammingDistance(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      count++;
    }
  }
  return count;
}

function getDivisorsCnt(n) {
  let arr = [];
  let count = 0;
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  arr.forEach((item) => {
    if (n % item === 0) {
      count++;
    }
  });
  return count;
}

function multiplyAll(arr) {
  return function (n) {
    return arr.map((item) => item * n);
  };
}

function inAscOrder(arr) {
  return arr.every((el, ind) => {
    return ind > 0 ? el >= arr[ind - 1] : true;
  });
}

function solution(str) {
  if (str.length % 2 === 1) {
    str += "_";
  }
  let arr = [];
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str.slice(i, i + 2));
  }

  return arr;
}

const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
  }
  let count = 0;
  for (let i = begin; i <= end; i += step) {
    count += i;
  }
  return count;
};

function reverseWords(str) {
  return str
    .split(" ")
    .map((item) => item.split("").reverse().join(""))
    .join(" ");
}
