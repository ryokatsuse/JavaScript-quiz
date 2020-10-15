function Person(firstname, lastname) {
  this.firstname = firstname
  this.lastname = lastname
}

const member = new Person("aaa", "bbb")
Person.getFullname = function() {
  return `${this.firstname} ${this.lastname}`
}

console.log (member.getFullname()) // TypeError

// コンストラクタにプロパティを追加することはできない。一度にすべてのオブジェクトを追加する場合はprototypeを追加する必要がある

// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };