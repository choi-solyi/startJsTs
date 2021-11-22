interface IPerson1 {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson1 {
  name: string;
  age?: number | undefined;
  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(`안녕하세요 ${this.name}입니당`);
  }
}

const person: IPerson1 = new Person("solyi");
//interface이름으로 부르는게 좀더 옳다
person.hello();

//객체지향 OOP 에서 자주 사용됨.
