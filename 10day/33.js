const person = {name: "aaa"}

function sayHi(age) {
  console.log(`${this.name} is ${age}`)
}

sayHi.call(person, 21) // aaa is 21
sayHi.bind(person, 21) // function

// callはthisキーワードを参照したいオブジェクトに渡すことができる
// bindは新たな関数を作成しないとそのまま実行されない。