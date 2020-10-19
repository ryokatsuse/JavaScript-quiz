const a = {}
const b = {key: "b"}
const c = {key: "c"}


a[b] = 123
a[c] = 456
console.log(a[b]) // 456

// オブジェクトのキーは自動的に変換される。実際にはa["object Object"] = 123をしていることになる。
// 同じようにcに456を入れるがこれもa["object Object"] に456を代入していることになる。つまりa[b]でログを出力しても実際にa["object Object"]になるので456が出力されることになる