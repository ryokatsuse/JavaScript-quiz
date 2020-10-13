let a = 3
let b = new Number(3)
let c = 3

console.log(a == b) // true
console.log(a === b) // false
console.log(b === c) // false

// new Number()は数値型ではない（オブジェクト型）ので比較演算子で===を使用すると型が違うのでエラーとなる
// == は厳密な型をチェックしないのでtrueになる