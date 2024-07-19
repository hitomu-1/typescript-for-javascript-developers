export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      //外からもアクセス（参照）できるようにexportをつける
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      //外からもアクセス（参照）できるようにexportをつける
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('はむさん');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('はむやん');
console.log(meOsaka.name);

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);

// namespaceを利用することでクラス名が競合して同名のクラスを作ることができないという問題を解消することができる

// Japaneseの中にさらに複数のPersonクラスを定義したくなった(ネストされたnamespaaceについて)場合はどうしたらいいのか

// 例えばJapaneseという名前空間の中にTokyoとOosakaのnamespaceを作ってそれぞれの空間にPersonクラスを作ってみたくなった場合
//exportを名前空間にも付けてあげる
