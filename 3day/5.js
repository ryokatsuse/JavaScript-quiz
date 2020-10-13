const bird = {
  size: "small"
}

const mouse = {
  name: "Mickey",
  small: true
}

// console.log(mouse.bird.size) //エラー
console.log(mouse[bird.size])
console.log(mouse[bird["size"]])

// 全てのオブジェクトは文字列である。（Symbolを除く）
// mouse[bird.size]の例はbird.sizeが評価され文字列"small"となる。その後mouse["small"]はtrueを返す



