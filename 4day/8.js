class Chameleom {
  static colorChange(newColor) {
    this.newColor = newColor
    return this.newColor 
  }

  constructor({newColor = "green"} = {}) {
    this.newColor = newColor
  }
}

const freddie = new Chameleom()
console.log(freddie.colorChange("orange")) //error


// staticは静的メソッドなので作成されたコンストラクタ上でしか動作しないのでTypeErrorになる。
// 呼び出すときはChameleom.colorChange()しないといけない。
//@see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes/static
