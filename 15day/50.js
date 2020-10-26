[1, 2, 3].map(num => {
  if(typeof num === "number") return
  return num * 2
})

// [undefined, undefined, undefined]

// 配列をマッピングするときにnumの値に代入されるのはループで渡ってくる要素となる。
//　この場合ifステートメントの条件はtrueを返す。 map関数は新しい配列を作成して関数から返された値を挿入
// 関数から値を返さないと関数はundefinedになる。