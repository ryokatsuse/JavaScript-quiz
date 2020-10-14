function bark() {
  console.log("Woof!")
}

console.log(bark.animal = "dog") //dog

// 最初のWoofは何も起こらない。関数がオブジェクトになっているためそのまま実行されたとみなしている