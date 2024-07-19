export {};

// 抽象メソッド：必ずオーバーライドする必要があるメソッド
// 処理の実態がない。こんな名前のメソッドがこのクラスにはありますよーと宣言しているだけ
// 抽象メソッドの宣言のことをシグネチャーという。

// オーバーライドされて宣言がされていないとエラーを教えてくれるため
// 、大規模なアプリ開発には大変ありがたい

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

class Tiger extends Animal {
  cry() {
    return 'grrrrr';
  }
}
