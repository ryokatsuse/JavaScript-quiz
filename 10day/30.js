const foo = () => console.log("first")
const bar = () => setTimeout(() => console.log("second"))
const baz = () => console.log("third")

bar()
foo()
baz()

// first third second
// setTimeoutは最後に呼ばれる