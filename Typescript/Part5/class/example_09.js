"use strict";
class Person9 {
    hello() {
        console.log("안녕하세요", Person9.CITY);
    }
    chagne() {
        Person9.CITY = "LA";
    }
}
Person9.CITY = "SEOUL";
const p1 = new Person9();
// static이 없으면 실행됨
p1.hello();
//static 이 있으면 실행됨
// Person9.hello();
// Person9.CITY;
const p2 = new Person9();
p2.hello();
p1.chagne();
p2.hello();
