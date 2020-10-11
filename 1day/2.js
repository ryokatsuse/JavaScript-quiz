for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log((i), 1))
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log((i), 1))
}

// setTimeoutコールバック関数はループが実行された後に呼び出されるのでvar指定だとグローバル変数になるのでコールバックが呼び出される前にiが3になってしまう。

// 一方でletはブロックスコープになるのでそれぞれの繰り返しの間はiは常に新しい値をもつので正しく順番に表示される。