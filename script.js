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
