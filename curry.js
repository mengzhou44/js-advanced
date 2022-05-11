function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

let curriedSum = curry(sum);

console.log(curriedSum(2)(3)(4));

let add2 = curriedSum(2)

console.log(add2(3)(4))
