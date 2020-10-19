String.prototype.giveLydiaPizza = () => {
  return "aaa aaa bbb DCVF"
}

const name = "Lydia"
console.log(name.giveLydiaPizza()) // "aaa aaa bbb DCVF"

// String.prototypeをつけることによってプロトタイプにメソッドを追加した。
// プロタイプにメソッドを生やさないと関数実行はできない。
// プリミティブ文字列は、文字列プロタイプ関数によって生成された文字列オブジェクトに変換される