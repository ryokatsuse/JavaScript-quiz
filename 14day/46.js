let person = {name: "Lydia"}
const members = [person]
person = null
console.log(members) //  [{name: "Lydia"}]

// membersの変数に代入したあとは[{name: "Lydia"}]になる。このああとにpersonにnullを代入しているがperson変数の値をnullに変更するだけで配列の要素は変更されない。消したい場合はperson.nameなどとしないといけない