const obj = { a: "one", b: "two", a: "three" }
console.log(obj) // { a: 'three', b: 'two' }

// 同じ名前のキーが2つある場合、最初の位置にあるキーは置き換えられます。