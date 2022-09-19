function getMathModule(x) {
  const y = 2;
  return {
    sum() {
      return x + y;
    },
    subtract() {
      return x - y;
    },
    multiply() {
      return x * y;
    },
    divide() {
      return x / y;
    },
  };
}

export const mathModule = getMathModule(22);

console.log("CLOSURE: ", mathModule.sum());
console.log("CLOSURE: ", mathModule.subtract());
console.log("CLOSURE: ", mathModule.multiply());
console.log("CLOSURE: ", mathModule.divide());
console.dir(mathModule); //In the console show`s - Closure (getMathModule) {x: 22, y: 2} in [[Scopes]]
