
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia"
  let age = 21;
}

sayHi();

// undefined ReferenceError
// varで宣言すると変数が定義されている行に到達するまでデフォルト値のundefinedで初期化される
// let、constはそもそも初期化されることはないので宣言される行の前にアクセスできないのでReferenceErrorとなる