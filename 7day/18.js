function checkAge(data) {
  if(data === {age: 18}) {
    console.log("adult!")
  } else if (data == {age: 18 }) {
    console.log("still adult")
  } else {
    console.log("Not adult!") // これが出力される
  }
}

checkAge({age: 18})

// 等価性をテストする際にプリミティブはそれらを比較するのに対してオブジェクトはそれらの参照によって比較されます。
//　オブジェクトがメモリ内の同じ場所への参照を盛っていいるかどうかを確認します。

