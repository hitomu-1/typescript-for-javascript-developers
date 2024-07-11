export {};

class Person {
  // public name: string;
  // protected age: number;

  constructor(public name: string, protected age: number) {
    // this.name = name;
    // this.age = age;
  }
  profile() {
    return `nameは${this.name}。、ageは${this.age}.`;
  }
}

const me = new Person('はむさん', 43);
console.log(me);
console.log(me.name);
console.log(me.profile());
