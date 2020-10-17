function getAge() {
  "use strict";
  age = 21
  console.log(age)
}

console.log(getAge()) //ReferenceError

// use strictが指定されている場合はグローバル変数を宣言できない。