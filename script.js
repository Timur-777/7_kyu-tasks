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
