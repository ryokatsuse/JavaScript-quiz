function sayHi() {
  return (() => 0)()
}

console.log(typeof sayHi())

// 即時関数の戻り値が返るので0が返ってくる。したがってnumberが返ってくる