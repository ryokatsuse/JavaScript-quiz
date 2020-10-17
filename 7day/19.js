function getAge(...args) {
  console.log(typeof args)
}

getAge(21) // object

// スプレッド演算子は引数付きの配列を返します。　配列はオブジェクトなのでtypeosした場合はオブジェクトを返します。