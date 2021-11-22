"use strict";
const p41 = {
    name: "solyi",
    age: 31,
    hello: function () {
        console.log(`안녕하세요 ${this.name}입니다`);
    },
};
// p41 과 동일.
const p42 = {
    name: "solyi",
    age: 31,
    hello() {
        console.log(`안녕하세요 ${this.name}입니다`);
    },
};
// arrow function 이 아닌 경우 아래처럼 사용 가능
// const p42: Person4 = {
//   name: "solyi",
//   age: 31,
//   hello(this: Person4): void {
//     console.log(`안녕하세요 ${this.name}입니다`);
//   },
// };
const p43 = {
    name: "solyi",
    age: 31,
    hello: () => {
        // console.log(`안녕하세요 ${this.name}입니다`);
    },
};
// arrow function 내부에서는 this 사용 불가!
// const p43: Person4 = {
//   name: "solyi",
//   age: 31,
//   hello: (this: Person4): void => {
//     console.log(`안녕하세요 ${this.name}입니다`);
//   },
// };
p41.hello();
p42.hello();
