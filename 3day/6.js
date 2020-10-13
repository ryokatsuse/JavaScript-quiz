let c = {greeting: "Hey!"}
let d

d = c
c.greeting = "Hello"
console.log(d.greeting) // Hello

// 全てのオブジェクトは互いに等しく設定すると参照によって相互作用する
// 1つのオブジェクトを変更すると全て変更される

