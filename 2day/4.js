console.log(+true) // 1
console.log(!"Lydia") // false

// 単項演算子はオペランドを数値に変換しようとしているためtrueは1、falseは0を返す
// 文字列は truthy valueなためここではfalsyなのかをチェックしている。なのでfalse !!ture
// @see https://developer.mozilla.org/ja/docs/Glossary/Truthy