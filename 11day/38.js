(() => {
  let x, y
  try {
    throw new Error()
  } catch (x) {
    (x = 1), (y =2)
    console.log(x)
  }
  console.log(x)
  console.log(y)
})()
// 1 undefined 2

// catchブロックは引数xを受け取る
// 引数をわ泰時の変数と同じxではないためこの変数はブロックスコープである。
// ブロックスコープにxは1、yは2が代入されてcatch句内では1が出力される
// catch句以外ではxは未定義、yはそのまま2である
