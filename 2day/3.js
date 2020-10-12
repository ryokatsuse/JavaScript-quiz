const shape = {
  redious: 10,
  diameter() {
    return this.redious * 2;
  },
  perimeter: () => 2 * Math.PI * this.redious
}

console.log(shape.diameter()) // 20
console.log(shape.perimeter()) 　// NaN


// perimeter関数はアロー関数のため通常のthisとは挙動が異なる。現在の周囲の範囲を参照します。
// 



