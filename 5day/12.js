function Person(firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
}
const lydia = new Person("aaa","bbb")
const sarah = Person("ccc", "ddd")
console.log(lydia)
console.log(sarah) // undefined

// newを使わない場合グローバルオブジェクトとなる。
// this.firstname、this.lastnameに代入しようとしていたが実際にはglobal.firstName、global.laastNameに代入されてしまっている。

