// イベント伝播の3つの段階はどれですか？
// A: Target > Capturing > Bubbling
// B: Bubbling > Target > Capturing
// C: Target > Bubbling > Capturing
// D: Capturing > Target > Bubbling

// D

// キャプチャーフェーズ：DOMツリーをたどってルート要素から発生要素を探しに行く
// ターゲットフェーズ：発生要素を検知する
// バブリングフェーズ：　ルート要素まで遡る

// イベント伝播実行を中止する場合はstopPropagationを使う