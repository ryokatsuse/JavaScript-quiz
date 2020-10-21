const numbers = [1, 2, 3]
numbers[10] = 11
console.log(numbers) //[ 1, 2, 3, <7 empty items>, 11 ]
console.log(numbers[5]) // undefined

// 配列の長さを超える値を配列内に挿入するとempty slotsというものを作成する仕様になっている
// 実態はundefinedの値を持つ。代入した場所までの数と一緒に返ってくる