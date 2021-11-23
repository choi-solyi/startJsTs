"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log(`안녕하세요 ${this.name}입니당`);
    }
}
const person = new Person("solyi");
//interface이름으로 부르는게 좀더 옳다
person.hello();
//객체지향 OOP 에서 자주 사용됨.
