"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Person {
    //생성자
    constructor(age) {
        // 선언
        this.name = "solyi";
        if (age === undefined) {
            this.age = 20;
        }
        else {
            this.age = age;
        }
    }
    //오버로딩은 나중에
    // constructor(age: number) {
    //   this.age = age;
    // }
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
//async await 는 사용할수없다.
// constructor 가 private일때는 호출할수없어진다.
// const p1 = new Person(31);
// 기본적으로는 public 이므로 어디서든 접근이 가능해진다.
// console.log(p1.age);
// private age 로 변경 했을때는 외부에서 p1.age 사용이 불가능해진다.
// console.log(p1.age);
// 이전에는 _age 이런식으로 private 를 표기 해주었었는데
// 현재까지도 private인 경우에는 언더바를 앞에 붙여서 표기해주는 경우도 있다.
// protected
// 외부에서는 접근이 불가능 하지만 상속관계에 있으면 접근이 가능하다.
// 클래스의 상속에 대해서 배운 뒤 다시 !
