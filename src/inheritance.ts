export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

// let animal = new Animal();
// console.log(animal.run());

// // このアニマルクラスは一般的な動物を示すためのクラスになるためランメソッドを読んでもどの程度の早さ走るのかは表現してくれない

// // 継承とは：一言で、既存のクラスを拡張して新たなクラスに作り上げること。

// // アニマルクラスを継承してライオンクラスを作り、もう少し具体的なクラスを実装していくことにする。

class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);

    this.speed = speed;
  }
  run(): string {
    return `${super.run()} ${this.speed}km/h.`;
  }
}

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 80).run());
