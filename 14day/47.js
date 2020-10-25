const person = {
  name: "aaa",
  age: 21
}

for (const item in person) {
  console.log(item) // name, age
}

// for inではオブジェクトキーを繰り返し処理します。バリューを取得したい場合はpersonp[item]として上げる必要がある
