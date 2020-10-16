function getPersonInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const person = "Lydia"
const age = 21

console.log(getPersonInfo`${person} is ${age} year old`) // ["", " is ", " years old"] "Lydia" 21

// タグ付きテンプレートの場合は最初の引数の値あは常に文字列の配列である。